import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  receiveData(): Observable<DataReceived> {
    return this.http
      .get<DataReceived[]>(`apiurl`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  sendData(payload: DataSent): Observable<DataSent> {
    return this.http
      .post<DataSent>('apiurl', payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
