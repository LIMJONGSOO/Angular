import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Subscription, Observable, of, throwError } from 'rxjs';
import { debounceTime, switchMap, map, tap, catchError } from 'rxjs/operators';

interface GithubUser {
  login: number;
  name: string;
}

@Component({
  selector: 'app-observable-event-http',
  templateUrl: './observable-event-http.component.html',
  styleUrls: ['./observable-event-http.component.scss']
})
export class ObservableEventHttpComponent implements OnInit, OnDestroy {
  searchInput: FormControl = new FormControl('');
  githubUser: GithubUser;
  subscription: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((userId: string) => this.getGithubUser(userId))
      )
      .subscribe(
        user => this.githubUser = user,
        error => console.log(error)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getGithubUser(userId: string): Observable<GithubUser> {
    return this.http
      .get<GithubUser>(`https://api.github.com/users/${userId}`)
      .pipe(
        map(user => ({ login: user.login, name: user.name })),
        tap(console.log),
        catchError(err => {
          if(err.status === 404) {
            return of(`[ERROR] Not found user: ${userId}`);
          } else {
            return throwError(err);
          }
        })
      );
  }

}
