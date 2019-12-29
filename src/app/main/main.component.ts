import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, Optional } from '@angular/core';
import { Menu1Component } from './menu1/menu1.component';
//Class Privider
import { RootClassProviderServiceService, ClassProviderServiceService } from '../../service/classprovider/class-provider-service.service';
// Factory Provider
import { IsDevProvider, ServiceProvider } from '../../service/factoryprovider/factory.service.provider';
// InjectionToken
import { AppConfig, APP_CONFIG, AppConfigProvider } from '../../service/injectiontoken/app.config';
//Rxjs
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    IsDevProvider,
    ServiceProvider,
    { provide: 'CONFIG', useValue: 1000 },
    AppConfigProvider
  ]
})
export class MainComponent implements OnInit {

  @ViewChild(Menu1Component, {static: false}) menu1: Menu1Component;
  @ViewChild('p', {static: false}) p: ElementRef;
  data: string;

  constructor(private classProviderServiceService: ClassProviderServiceService,
              private rootClassProviderServiceService: RootClassProviderServiceService,
              @Inject('CONFIG') public config: number,
              @Inject(APP_CONFIG) public appConfig: AppConfig,
              @Optional() public testService: Menu1Component ) {
    this.data = 'test';

    console.log(`root class provider say '${rootClassProviderServiceService.sayHi()}'`);
    console.log(`factory class provider say '${classProviderServiceService.sayHi()}'`);//ServiceProvider에서 factory provider를 통해서 받음
    console.log(`config is ${config}`);
    console.log('constructor', this.p);
    console.log('InjectionToken ', appConfig);
    console.log('@Optional 선택적 의존성 주입 ', this.testService ? testService.data : 'test');
   }

  ngOnInit() {

    // 옵저버블이 구독될 떄 호출되는 구독 함수
    const subscriber = (observer) => {
      try {
        // next 노티피케이션 방출
        observer.next(1);
        observer.next(2);

        // throw new Error('Something wrong');

        // complete 노티피케이션 방출
        observer.complete();
      } catch(e) {
        observer.error(e);
      } finally {
        //구독 해지 될 때 호출되는 콜백 함수
        return () => console.log('Unsubscribed!');
      }
    }

    // 옵저버블 생성
    const observable$ = new Observable(subscriber);

    // 구독 (Subscription)
    observable$.subscribe(
      // 옵저버블이 방출한 next 노티피케이션에 반응하는 next 메소드
      value => console.log(value),
      // 옵저버블이 방출한 error 노티피케이션에 반응하는 error 메소드
      error => console.log(error),
      // 옵저버블이 방출한 complete 노티피케이션에 반응하는 complete 메소드
      () => console.log('Commplete')
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log('afterViewInit', this.p);
  }

  removeData(data: string) {
    this.data = data;
  }

  toggle() {
    this.menu1.view = !this.menu1.view;
  }

  changeData() {
    this.menu1.changeData('parent data');
  }
}

//Unicast
const coldObservable$ = Observable.create(
  observer => observer.next(Math.random())
);

// Cold observable을 구독하는 모든 옵저버는 자신만을 위해 독립적으로 실하는 옵저버블을 갖게 된다 
coldObservable$.subscribe(
  value => console.log(`1st Cold observable's observer: ${value}`)
);

coldObservable$.subscribe(
  value => console.log(`2nd Cold observable's observer: ${value}`)
);

//MultiCast
const subject = new Subject();
const hotObservable$ = subject.asObservable();

// 구독하고 있는 모든 옵저버에게 부수 효과(side-effect)가 있다.
hotObservable$.subscribe(
  value => console.log(`1st Hot observable's observer: ${value}`)
);

hotObservable$.subscribe(
  value => console.log(`2nd Hot observable's observer: ${value}`)
);

// 랜덤 데이터 방출
subject.next(Math.random());