import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../Models/contact';
import { PhonebookService } from '../phonebook-grid-list/phonebook.service'

@Component({
  selector: 'edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css']
})
export class EditContactDialogComponent implements OnInit {

  constructor() {

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

  ngOnInit() {
  }

}
