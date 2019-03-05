import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ServerMessage, MessageType } from '../models/servermessage';
import { MessageDialogComponent } from '../components/dialogs/message-dialog/message-dialog.component';
import { MessageDialogData } from '../models/messagedialogdata.model';
import { MessageSnackbarComponent } from '../components/dialogs/message-snackbar/message-snackbar.component';

@Injectable()
export class NotificationService {
    public constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

    public CheckIsResponseNotification(responseBody: any): boolean {
        return responseBody instanceof ServerMessage;
    }
    public ShowNotificationFrom(responseBody: any) {
        const serverMessage = responseBody as ServerMessage;
        const messageData = new MessageDialogData(serverMessage.title, serverMessage.subtitle, serverMessage.text);
        this.ShowNotification(messageData, serverMessage.messageType);
    }

    public ShowNotification(messageData: MessageDialogData, messageType: MessageType) {
        if (messageType === MessageType.Dialog) {
            const dialogRef = this.dialog.open(MessageDialogComponent, {data: messageData});
            dialogRef.afterClosed();

        } else if (messageType === MessageType.Toast) {
            this.snackBar.openFromComponent(MessageSnackbarComponent, {data: messageData, duration: 3000});
        }
    }
}
