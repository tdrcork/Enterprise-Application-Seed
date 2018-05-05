/* Base Angular */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/* My Files */
import { Error } from './error.model';
import { Success } from './success.model';


@Injectable()
export class LoggingService {


    constructor() {}

    errorLog(error: Error) {

    }

    successLog(success: Success) {

    }
}
