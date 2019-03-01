import { Component, OnInit, Inject } from '@angular/core';
import { MessageDialogData } from 'src/app/models/messagedialogdata.model';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  templateUrl: './message-snackbar.component.html',
  styleUrls: ['./message-snackbar.component.scss']
})
export class MessageSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public MessageData: MessageDialogData) { }

  ngOnInit() {
  }

}
