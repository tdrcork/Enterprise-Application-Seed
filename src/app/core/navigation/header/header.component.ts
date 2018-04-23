import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../ngrx/app.reducer';
import * as fromAuth from '../../auth/ngrx/auth.reducers';
import { CognitoService } from '../../auth/services/cognito.service';
import { Store } from '@ngrx/store';
import { shiftInitState } from '@angular/core/src/view';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private cogitoService: CognitoService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('auth');
  }



}
