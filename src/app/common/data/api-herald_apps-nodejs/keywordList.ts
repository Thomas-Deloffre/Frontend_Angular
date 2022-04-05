import { Keyword } from "./keyword";
import { App } from "./app";
import { Wallet } from "./wallet";

export class KeywordList {
    keyWordList_Id? : any;
    keywordList_Name? : string;
    keywordList_Number? : number; 
    keywordList_DateCreat? : Date; 
    keywordList_Keywords? : Array<Keyword["keyword_Name"]> = []; 
    keywordList_App? :  App["package_name"];
    keywordList_Wallet? : Wallet["wallet_Id"];


}

export interface APIResponse<T> {
    results: Array<T>;
}