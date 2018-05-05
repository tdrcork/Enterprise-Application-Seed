export interface Error {
    LevelOfUrgency: number;
    feature: string;
    file: string;
    dependencies: string[];
    method: string;
    error: string;
    errorMessage: string;
    response: object | null;
    responseBody: object | null;
    request: object | null;
}
