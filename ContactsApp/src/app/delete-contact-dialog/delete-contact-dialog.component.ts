import { Component, OnInit, Inject } from '@angular/core';
import { PhonebookService } from '../phonebook-grid-list/phonebook.service'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.css']
})

export class DeleteContactDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteContactDialogComponent>,public phonebookService: PhonebookService, @Inject(MAT_DIALOG_DATA) public contactId: any) { }

  ngOnInit() { }

  //calling the delete method from contactService
  deleteContact(): void {
    this.phonebookService.deleteContact(this.contactId);
    this.dialogRef.close();
  }
}
