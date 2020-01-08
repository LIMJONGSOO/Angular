import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, Optional } from '@angular/core';
import { ChildComponent } from './child/child.component';
// Class Privider
// tslint:disable-next-line: max-line-length
import { RootClassProviderServiceService, ClassProviderServiceService } from '../../../service/classprovider/class-provider-service.service';
// Factory Provider
import { IsDevProvider, ServiceProvider } from '../../../service/factoryprovider/factory.service.provider';
// InjectionToken
import { AppConfig, APP_CONFIG, AppConfigProvider } from '../../../service/injectiontoken/app.config';
//Http
import { HttpService } from '../../../service/http/http.service';

@Component({
  selector: 'app-state-share',
  templateUrl: './state-share.component.html',
  styleUrls: ['./state-share.component.scss'],
  providers: [
    IsDevProvider,
    ServiceProvider,
    { provide: 'CONFIG', useValue: 1000 },
    AppConfigProvider
  ]
})
export class StateShareComponent implements OnInit {
  @ViewChild(ChildComponent, {static: false}) child: ChildComponent;
  @ViewChild('p', {static: false}) p: ElementRef;
  data: string;

  constructor(private classProviderServiceService: ClassProviderServiceService,
              private rootClassProviderServiceService: RootClassProviderServiceService,
              private httpService: HttpService,
              @Inject('CONFIG') public config: number,
              @Inject(APP_CONFIG) public appConfig: AppConfig,
              @Optional() public testService: ChildComponent ) {
    this.data = 'test';

    console.log(`root class provider say '${rootClassProviderServiceService.sayHi()}'`);
    console.log(`factory class provider say '${classProviderServiceService.sayHi()}'`);//ServiceProvider에서 factory provider를 통해서 받음
    console.log(`config is ${config}`);
    console.log('constructor', this.p);
    console.log('InjectionToken ', appConfig);
    console.log('@Optional 선택적 의존성 주입 ', this.testService ? testService.data : 'test');
    httpService.getTodos();
  }

  ngOnInit() { }

  removeData(data: string) {
    this.data = data;
  }

  toggle() {
    this.child.view = !this.child.view;
  }

  changeData() {
    this.child.changeData('parent change data');
  }
}
