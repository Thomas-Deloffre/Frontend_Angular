import { AppList } from "./appList";
import { App } from "./app";

export class Wallet {
    wallet_Id? : any;
    wallet_Name? : string;
    wallet_DateCreat? : Date;
    wallet_lastMod? : Date;
    wallet_text? : string;
    wallet_topic? : string;
    wallet_position? : number;
    wallet_main? : boolean;
    wallet_AppList? : Array<AppList> = [];
    wallet_apps? : Array<App["title"]> = [];

}

export interface APIResponse<T> {
    results: Array<T>;
}


