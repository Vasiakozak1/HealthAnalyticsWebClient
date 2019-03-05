import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { NotificationService } from './services/notification.service';
import { Injectable } from '@angular/core';
import { MessageDialogData } from './models/messagedialogdata.model';
import { MessageType } from './models/servermessage';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private userService: UserService,
                private notificationService: NotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let requestHandler;
        if (request.url.startsWith('http')) {
            requestHandler = next.handle(this.addAuthHeader(request));
            requestHandler.subscribe(response => {
                this.handleHttpResponse(response);
            });
        } else {
            requestHandler = next.handle(request);
        }
        return requestHandler;
    }

    private addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({setHeaders: {Authorization: 'Bearer ' + this.userService.GetUserToken()}});
    }

    private handleHttpResponse(response: any) {
        const needsNotification = this.notificationService.CheckIsResponseNotification(response.body);
        console.log(response);
        if (needsNotification) {
            this.notificationService.ShowNotificationFrom(response.body);
        }
        if (response.error) {
            const messageData = new MessageDialogData(response.statusText, '', response.error);
            this.notificationService.ShowNotification(messageData, MessageType.Dialog);
        }
    }

}
