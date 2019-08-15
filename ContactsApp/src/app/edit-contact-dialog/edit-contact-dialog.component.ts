import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { PhonebookService } from '../phonebook-grid-list/phonebook.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { debug } from 'util';

@Component({
  selector: 'edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css']
})
export class EditContactDialogComponent implements OnInit {
  editContactForm: FormGroup;

  constructor(public phonebookService: PhonebookService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditContactDialogComponent>) {
    this.editContactForm = new FormGroup({
      //name edit validation
      nameFormEditControl: new FormControl('', [
        Validators.required
      ]),

      //surname edit validation
      surnameFormEditControl: new FormControl('', [
        Validators.required
      ]),

      //phone number edit validation
      phoneNumberFormEditControl: new FormControl('', [
        Validators.required
      ]),
    });
  }

  //get for easy access to form fields
  get f() { return this.editContactForm.controls; }

  ngOnInit() {
    const contacts = this.data.contactDetails;
    const contactId = this.data.contactId;

    contacts.forEach((contact) => {
      if (contact.position === contactId) {
        this.editContactForm.controls.nameFormEditControl.setValue(contact.name);
        this.editContactForm.controls.surnameFormEditControl.setValue(contact.surname);
        this.editContactForm.controls.phoneNumberFormEditControl.setValue(contact.phone);
      }
    });
  }

  //method to call the edit contact function from the phonebook service
  updateContant(): void {
    if (this.editContactForm.valid) {
      this.phonebookService.editContact(this.data.contactId, this.editContactForm.get('nameFormEditControl').value, this.editContactForm.get('surnameFormEditControl').value, this.editContactForm.get('phoneNumberFormEditControl').value);
      this.dialogRef.close();
    }
  }

}
