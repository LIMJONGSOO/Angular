import { Component, OnInit, Inject, Optional } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { RootClassProviderServiceService, ClassProviderServiceService } from '../../../service/classprovider/class-provider-service.service';
// Factory Provider
import { IsDevProvider, ServiceProvider } from '../../../service/factoryprovider/factory.service.provider';
// InjectionToken
import { AppConfig, APP_CONFIG, AppConfigProvider } from '../../../service/injectiontoken/app.config';
//Http
import { HttpService } from '../../../service/http/http.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
  providers: [
    IsDevProvider,
    ServiceProvider,
    { provide: 'CONFIG', useValue: 1000 },
    AppConfigProvider
  ]
})
export class ProviderComponent implements OnInit {


  /*
  RootClassProviderServiceService는 @Injectable({providedIn: 'root'})를 통해서 따로 provide를 안 받아도 사용할 수 있지만,
  ClassProviderServiceService는 factory provider를 통해서 받음

  */

  constructor(private classProviderServiceService: ClassProviderServiceService,
              private rootClassProviderServiceService: RootClassProviderServiceService,
              @Inject('CONFIG') public config: number,
              @Inject(APP_CONFIG) public appConfig: AppConfig,
              @Optional() public testService: HttpService ) {
    console.log(`config is ${config}`);
    console.log('InjectionToken ', appConfig);
    console.log('@Optional 선택적 의존성 주입 ', this.testService ? testService.getTodos() : 'test');
    console.log(`root class provider say '${rootClassProviderServiceService.sayHi()}'`);
    console.log(`factory class provider say '${classProviderServiceService.sayHi()}'`); 
  }

  ngOnInit() {
  }

}
