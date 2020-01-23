import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, Optional } from '@angular/core';
//Rxjs
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    { provide: 'CONFIG', useValue: 1000 }
  ]
})
export class MainComponent implements OnInit {
  @ViewChild('p', {static: false}) p: ElementRef;

  constructor() { }

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
        // 구독 해지 될 때 호출되는 콜백 함수
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
}

// Unicast
// tslint:disable-next-line: deprecation
const coldObservable$ = Observable.create(
  (  observer: { next: (arg0: number) => any; }) => {
    return observer.next(Math.random());
  }
);

// Cold observable을 구독하는 모든 옵저버는 자신만을 위해 독립적으로 실하는 옵저버블을 갖게 된다 
coldObservable$.subscribe(
  value => console.log(`1st Cold observable's observer: ${value}`)
);

coldObservable$.subscribe(
  value => console.log(`2nd Cold observable's observer: ${value}`)
);

// MultiCast
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
