import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, App } from '../data/api-herald_apps-nodejs/app';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getAppsList(
    ordering: string,
    search?: string ): Observable<APIResponse<App>> {
      let params = new HttpParams().set('ordering', ordering);

      if (search) {
        params = new HttpParams().set('ordering', ordering).set('search',search);

      }

      return this.http.get<APIResponse<App>>(`${env.BASE_URL}/apps`, {
        params: params, 
      });
    } 

  
}
