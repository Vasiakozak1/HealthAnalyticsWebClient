import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './services/user.service';
import { Observable, of } from 'rxjs';
import { NotificationService } from './services/notification.service';
import { Injectable } from '@angular/core';
import { MessageDialogData } from './models/messagedialogdata.model';
import { MessageType } from './models/servermessage';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private userService: UserService,
                private notificationService: NotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = this.addAuthHeader(request);

        return next.handle(request).pipe(
            map((response: HttpResponse<any>) => {
                this.handleHttpResponse(response);
                return response;
            }), catchError(err => {
                this.handleErrorResponse(err);
                return of(err);
            }));
    }

    private addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({setHeaders: {Authorization: 'Bearer ' + this.userService.GetUserToken()}});
    }

    private handleHttpResponse(response: HttpResponse<any>) {
        const needsNotification = this.notificationService.CheckIsResponseNotification(response.body);
        if (needsNotification) {
            this.notificationService.ShowNotificationFrom(response.body);
        }
    }

    private handleErrorResponse(errorResponse: HttpErrorResponse) {
        const messageData = new MessageDialogData(errorResponse.statusText, '', errorResponse.error);
        this.notificationService.ShowNotification(messageData, MessageType.Dialog);
    }

}
