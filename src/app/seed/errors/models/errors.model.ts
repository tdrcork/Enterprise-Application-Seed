export interface Error {
    message: string;
    clientError: ClientError;
    serverError: ServerError;
}

export interface ServerError {
    status: string;
    message: string;
    page: PageErrorInfo | null;
    payload: any;
}

export interface ClientError {
    message: string;
    page: PageErrorInfo | null;
    function: FunctionErrorInfo | null;
}

export interface PageErrorInfo {
    userId: number;
    feature: string;
}

export interface FunctionErrorInfo {
    name: string;
    description: string;
    fileName: string;
}
