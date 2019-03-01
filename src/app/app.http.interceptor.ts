import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { NotificationService } from './services/notification.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private userService: UserService,
                private notificationService: NotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // const needToShowNotification = this.notificationService.CheckIsResponseNotification()
        const requestHandler = next.handle(this.addAuthHeader(request));
        requestHandler.subscribe(response => console.log(response));
        return requestHandler;
    }

    private addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({setHeaders: {Authorization: 'Bearer ' + this.userService.GetUserToken()}});
    }
}
