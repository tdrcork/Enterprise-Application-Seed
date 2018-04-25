import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../ngrx/app.reducer';
import * as fromAuth from '../../auth/ngrx/auth.reducers';
import * as AuthActions from '../../auth/ngrx/auth.actions';
import { Store } from '@ngrx/store';
import { shiftInitState } from '@angular/core/src/view';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  @Output() sidenavToggle = new EventEmitter<void>();
  isOpen = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
    console.log(this.isOpen);
    if (this.isOpen === false) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
    console.log(this.isOpen);
  }




}
