export class AppList{
    applist_Id?: string;
    applist_Name? : string;
    applist_Number?: number;
    
}

export interface APIResponse<T> {
    results: Array<T>;
}