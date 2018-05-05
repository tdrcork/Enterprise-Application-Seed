import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromApp from './app.reducer';
import * as fromAuth from './core/auth/state/auth.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    
  }

}
