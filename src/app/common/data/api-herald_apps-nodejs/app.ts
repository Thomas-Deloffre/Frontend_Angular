import { Wallet} from "./wallet";
import { Keyword } from "./keyword";
import { KeywordList } from "./keywordList";

export class App {
    package_name? : String;
    market_source? : String;
    market_status? : String;
    title? : String;
    descriptionL? : String;
    short_desc? : String;
    category? : String;
    cat_int? : Int16Array;
    cat_key? : String;
    cat_keys? : Array <String>;
    cat_type? : Int16Array;
    content_rating? : String;
    developer? : String;
    what_is_new? : String;
    icon? : URL;
    icon_72? : URL;
    featured_graphic? : URL;
    min_sdk? : String;
    downloads? : String;
    downloads_min? : Number;
    downloads_max? : Number;
    promo_video? : URL;
    rating? : Number;
    size? : BigInt;
    screenshots? : Array <URL>;
    version? : String;
    number_ratings? : Int16Array;
    ratings_1? : Int16Array;
    ratings_2? : Int16Array;
    ratings_3? : Int16Array;
    ratings_4? : Int16Array;
    ratings_5? : Int16Array;
    badges? : Array <String>;
    price_currency? : String;
    price_numeric? : Int16Array;
    price? : String;
    price_i18n_countries? : String;
    iap? : Boolean;
    iap_min? : Int16Array;
    iap_max? : Int16Array;
    lang? : String;
    i18n_lang? : String;
    from_developer? : Array <String>;
    market_url? : URL;
    privacy_policy? : URL;
    content_descriptors? : Array <String>;
    contains_ads? : Boolean;
    market_update? : Date;
    created? : Date;
    website? : URL;
    physical_address? : String;
    unpublished_timestamp? : Date;
    walletName? : Wallet["wallet_Name"];
    walletId? : Wallet["wallet_Id"]; 
    keywords? : Array<Keyword["keyword_Name"]> = [];
    keywordList? : KeywordList["keyWordList_Id"];

 
}

export interface APIResponse<T> {
    results: Array<T>;
}

