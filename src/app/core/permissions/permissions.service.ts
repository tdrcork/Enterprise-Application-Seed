

/* Base Angular */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { API } from 'aws-amplify';
import * as fromApp from '../../app.reducer';
import * as fromPermissions from './state/permissions.reducer';
import * as PermissionsActions from './state/permissions.actions';


const apiName = 'permissions';
const path = '/permissions';

@Injectable()
export class PermissionsService {

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  hasClearance(params: {clearance: number, requiredClearance: number}) {
    if (params.clearance > params.requiredClearance) {
      return true;
    } else {
      return false;
    }
  }

  hasKey(params: {keys: string[], requiredKey: string}) {
    if (params.keys.includes(params.requiredKey)) {
      return true;
    } else {
      return false;
    }
  }

  addNewUserPermissions(params: {clearance: number, keys: string[]}) { // adds new user permissions to store
    const myInit = {
      headers: {},
      body: {
        clearance: params.clearance,
        keys: params.keys
      }
    };

    API.post(apiName, path, myInit)
      .then(success => {
        this.setPermissionsState();
      })
      .catch(error => {
        console.log(error);
      });
  }

  setPermissionsState() { // gets permissions from DB, sets them in store.
    const myInit = {
      headers: {},
      response: true
    };

    API.get(apiName, path, myInit)
      .then(permissions => {
        this.store.dispatch(new PermissionsActions.SetUserClearance(permissions.clearance));
        this.store.dispatch(new PermissionsActions.SetUserKeys(permissions.keys));
      })
      .catch(error => {
        console.log(error);
      });
  }

  clearPermissionsState() {
    this.store.dispatch(new PermissionsActions.ClearPermissions());
  }

  updatePermissions(body: object) { // replaces the data in the database, then sets the state using the new data
    const myInit = {
      body: body,
      headers: {}
    };

    API.put(apiName, path, myInit)
      .then(response => {
        this.setPermissionsState(); // TODO: get this without making another request
      })
      .catch(error => {
        console.log(error);
      });
  }

  addUserKey(params: {newKey: string}) {
    this.store.dispatch(new PermissionsActions.AddUserKey(params.newKey)); // effect
    // 1:  get actual array of strings.  2:  modify it.  3:  send it to db  4: update state
    // userKeys = userKeys.push(newKey)
    // this.updateUserPermissions({'keys': userKeys});
  }

  deleteUserKey(params: {deleteKey: string}) {
    this.store.dispatch(new PermissionsActions.DeleteUserKey(params.deleteKey)); // effect
    // userKeys.splice(userKeys.indexOf(deleteKey), 1);
    // this.updateUserPermissions({'keys': userKeys});
  }

  /*
  to change keys:
  step 1:  get current key list
  step 2:  change the array(add or delete)
  step 3:  run updateUserPermissions(new array)
  */
}
