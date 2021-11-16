import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('Interceptor', request.url);
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer 1234567890`
            }
        })
        return next.handle(request).pipe(
            tap(res => console.log(res))
        );   
    }
}