import { KeywordList } from "./keywordList";


export class Keyword { 
    keyword_Id? : any; 
    keyword_Name? : string;
    keyword_List? : KeywordList["keywordList_Name"];

}

export interface APIResponse<T> {
    results: Array<T>;
}