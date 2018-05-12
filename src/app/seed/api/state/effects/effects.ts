import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../store';
import * as apiActions from '../actions/actions';
import * as fromServices from '../../services';

@Injectable() {
export class ApiEffects {
    constructor(
        private actions$: Actions,
        private apiService: fromServices.ApiService
    ) {}

    @Effect()
    actionSideEffect$ = this.actions$.ofType(apiActions.ACTION).pipe(
        // rxjs logic here
    )
}
}