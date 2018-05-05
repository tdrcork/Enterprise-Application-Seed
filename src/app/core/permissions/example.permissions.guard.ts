/* Angular */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

/* My Files */
import * as fromApp from '../../app.reducer';
import * as fromPermissions from './state/permissions.reducer';
import { PermissionsService } from './permissions.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  pageClearance: number;
  constructor(
    private store: Store<fromApp.AppState>,
    private permissions: PermissionsService
  ) { this.pageClearance = 2; }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.store.select('permissions').map((permissionsState: fromPermissions.State) => {
        const params = {
          clearance: permissionsState.clearance,
          requiredClearance: this.pageClearance
        };
        return this.permissions.hasClearance(params);
      });
  }
}
