import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../Models/contact';
import { PhonebookService } from '../phonebook-grid-list/phonebook.service'

@Component({
  selector: 'add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.css']
})

export class AddContactDialogComponent implements OnInit {
  contactForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddContactDialogComponent>, public phonebookService: PhonebookService) {
    this.contactForm = new FormGroup({

      //name validation
      nameFormControl: new FormControl('', [
        Validators.required
      ]),

      //surname validation
      surnameFormControl: new FormControl('', [
        Validators.required
      ]),

      //phone number validation
      phoneNumberFormControl: new FormControl('', [
        Validators.required
      ]),
    });
}

  ngOnInit() { }

  public position = 0;
  //get for easy access to form fields
  get f() { return this.contactForm.controls; }

  //calling me Contact Model class
 
  //close the modal 
  onNoClick(): void {
    this.dialogRef.close();
  }

  //method to call the add contact function from the phonebook service
  addContant(): void {
    if (this.contactForm.valid) {
     //if form fields are all populated pass the fields to the Contact Class
      this.phonebookService.createContant(new Contact(this.position, this.contactForm.get('nameFormControl').value, this.contactForm.get('surnameFormControl').value, this.contactForm.get('phoneNumberFormControl').value));
      this.dialogRef.close();
    }
  }

}
