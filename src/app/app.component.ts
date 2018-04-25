import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromApp from './core/ngrx/app.reducer';
import * as fromAuth from './core/auth/ngrx/auth.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('auth');
  }

}
