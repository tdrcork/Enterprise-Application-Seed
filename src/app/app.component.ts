import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromApp from './core/ngrx/app.reducer';
import * as fromAuth from './core/auth/ngrx/auth.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template:
  `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('auth');
  }

}
