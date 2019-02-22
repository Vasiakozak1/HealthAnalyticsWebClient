import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { MessageDialogComponent } from '../components/dialogs/message-dialog/message-dialog.component';
import { MessageDialogData } from '../models/messagedialogdata.model';

@Injectable()
export class DialogService {
    public constructor(public dialog: MatDialog) {
    }

    OpenMessageDialog<TResult>(messageData: MessageDialogData): Observable<TResult> {
        const dialogRef = this.dialog.open(MessageDialogComponent, {data: messageData});

        return dialogRef.afterClosed();
    }
}
