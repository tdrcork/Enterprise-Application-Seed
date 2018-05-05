import {BrowserModule} from '@angular/platform-browser';
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

/* TODO:  LITERALLY EVERYTHING.

This will eventually extend the error handler.  the goals will be:
1:  make the application easier to debug
2:  log errors in the database so they can be tracked and fixed
3:  notify me when catastrophic errors occur
4:  create a bug report for the error
*/


/*
@Injectable()
export class ErrorLogService extends ErrorHandler {
    private name: String = 'ErrorLogService';

    logError(error: any) {
        if (error instanceof HttpErrorResponse) {
            console.error('There was an HTTP error.', error.message, 'Status code:', (<HttpErrorResponse>error).status);
        } else if (error instanceof TypeError) {
            console.error('There was a Type error.', error.message);
        } else if (error instanceof Error) {
            console.error('There was a general error.', error.message);
        } else if (error instanceof ReferenceError) {
            console.error('There was a reference error.', error.message);
        } else if (error instanceof SyntaxError) {
            console.error('There was a syntax error.', error.message);
        } else {
            console.error('Nobody threw an error but something happened!', error);
        }

        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
              // Handle offline error
              console.log('no internet');
            } else {
              // Handle Http Error (error.status === 403, 404...)
              console.log(`${error.status} - ${error.message}`);
            }
         } else {
           // Handle Client Error (Angular Error, ReferenceError...)
           router.navigate(['/error'], { queryParams: {error: error} });
         }
        // Log the error anyway
        console.error('It happens: ', error);
    }

    log(error) {
        // Log the error to the console
        console.error(error);
        // Send error to server
        const errorToSend = this.addContextInfo(error);
        return fakeHttpService.post(errorToSend);
    }

    addContextInfo(error) {
        // All the context details that you want (usually coming from other services; Constants, UserService...)
        const name = error.name || null;
        const appId = 'shthppnsApp';
        const user = 'ShthppnsUser';
        const time = new Date().getTime();
        const id = `${appId}-${user}-${time}`;
        const location = this.injector.get(LocationStrategy);
        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const status = error.status || null;
        const message = error.message || error.toString();
        const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);
        const errorToSend = {name, appId, user, time, id, url, status, message, stack};
        return errorToSend;
    }



}



interface ServerError {
    status: number;
    name: string;
    message: string;
}

interface ClientError {
    name: string;
    type: string;
    file: string;
    line: number;
    column: number;
    stack: string;
}

interface ErrorMessages {
    error: string;
    message: string;
}

interface ErrorBackgroundInfo {
    feature: string;
    file: string;
    method: string;
    dependencies: string;
}

interface ErrorData {
    response: object;
    responseBody: object;
    request: object;
} */