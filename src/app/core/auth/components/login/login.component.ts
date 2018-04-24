import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../ngrx/app.reducer';
import * as AuthActions from '../../ngrx/auth.actions';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private store: Store<fromApp.AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.StartLogin({email: username, password: password}));
  }

  onForgot() {
    console.log('forgot');
  }

  openForgotDialog(): void {
    const dialogRef = this.dialog.open(ForgotpasswordComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed');
    });
  }

}
