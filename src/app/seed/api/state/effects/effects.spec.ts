import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ApiService } from '../../services/api.service';
import * as fromEffects from './effects';
import * as fromActions from '../actions/actions';

export class TestActions extends Actions {
    constructor() {
        super(empty());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

describe('ApiEffects', () => {
    let actions$ = TestActions;
    let service: ApiService;
    let effects: fromEffects.ApiEffects;

    const api = [
        {
            // test data
        },
        {
            // test data
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ApiService,
                fromEffects.ApiEffects,
                { provide: Actions, useFactory: getActions }
            ]
        });

        actions$ = TestBed.get(Actions);
        service = TestBed.get(ApiService);
        effects = TestBed.get(fromEffects.ApiEffects);
    })
});