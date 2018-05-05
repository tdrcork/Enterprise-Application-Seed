

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { HttpClient, HttpRequest } from '@angular/common/http';
import * as fromApp from '../../app.reducer';

@Injectable()
export class HttpService {

  constructor(

    public http: HttpClient) {
  }

}

