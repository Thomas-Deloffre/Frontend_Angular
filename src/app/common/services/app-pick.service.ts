import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class AppPickService {

    ROOT_URL = environment.apiPrefix + ":9998";

    httpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    constructor(private httpClient: HttpClient) {}

    pickAppsIntoSelectedWalletById( app_Id : any, wallet_Id : any ) : Observable<any> {
        var uri1 = "pickApp/wallet" + app_Id
        var uri2 = wallet_Id 
        console.log(`${this.ROOT_URL}/${uri1}/${uri2}`);
        return this.httpClient.get(`${this.ROOT_URL}/${uri1}/${uri2}`);

    }

























  }