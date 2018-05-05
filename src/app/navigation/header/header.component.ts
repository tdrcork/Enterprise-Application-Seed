import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../app.reducer';
import * as fromAuth from '../../core/auth/state/auth.reducers';
import * as AuthActions from '../../core/auth/state/auth.actions';
import { Store } from '@ngrx/store';
import { shiftInitState } from '@angular/core/src/view';
import { AuthService } from '../../core/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  authState: Observable<fromAuth.State>;
  isOpen = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private auth: AuthService) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onLogout() {
    this.auth.endSession();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();

    if (this.isOpen === false) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }




}
