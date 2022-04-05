import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable() 
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setParams :  {
                key: '51d6ad6558cba965b201ca3ab1a8130121305b84', 
            }
        });
        return next.handle(req);
    }
    
}