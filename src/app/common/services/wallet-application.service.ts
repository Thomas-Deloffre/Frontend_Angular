import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class walletApplicationService {

    ROOT_URL = environment.apiPrefix + ":9998";

    httpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    
    constructor(private httpClient: HttpClient) { }

    getWallet_ApplicationByAppId( app_Id: any, wallet_Id : any ) : Observable<any> {
      var uri1 = "app/wallet/"+ wallet_Id
      var uri2 = "app/wallet/"+ app_Id
      console.log(`${this.ROOT_URL}/${uri1}/${uri2}`);
      return this.httpClient.get(`${this.ROOT_URL}/${uri1}/${uri2}`);
    }

    
    getWallet_ApplicationByApp_Name( app_Name : any, wallet_Id : any ) : Observable<any> {
      var uri1 = "app/wallet/"+ wallet_Id
      var uri2 = "app/wallet/"+ app_Name 
      console.log(`${this.ROOT_URL}/${uri1}/${uri2}`);
      return this.httpClient.get(`${this.ROOT_URL}/${uri1}/${uri2}`);
    }  


    getAllAppInSelectedWallet( wallet_Id : any) : Observable<any> {
      var uri = "app/wallet/" + wallet_Id
      return this.httpClient.get(`${this.ROOT_URL}/${uri}`);
    }

    getAllApps() {
      var uri = "app/all" 
      return this.httpClient.get(`${this.ROOT_URL}/${uri}`)
    }


  }
  