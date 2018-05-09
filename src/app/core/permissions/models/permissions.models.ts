export interface Permissions {
    clearance: number;
    keys: string[];
}

export interface HasClearance {
    clearance: number;
    requiredClearance: number;
}

export interface HasKey {
    keys: string;
    requiredKey: string;
}








