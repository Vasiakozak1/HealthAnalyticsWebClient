import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addAuthHeader(request));
    }

    private addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({setHeaders: {Authorization: 'Bearer ' + this.userService.GetUserToken()}});
    }
}
