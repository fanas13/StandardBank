import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { debug } from 'util';

export interface PeriodicElement {
  position: number;
  name: string;
  surname: string;
  phone: string;
}

//default static data defined 
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 0, name: 'Nicholson 1', surname: 'Galela', phone: '111111111' },
  { position: 1, name: 'Nicholson 1', surname: 'Galela', phone: '222222222' },
  { position: 2, name: 'Nicholson 1', surname: 'Galela', phone: '333333333' },
  { position: 3, name: 'Nicholson 1', surname: 'Galela', phone: '444444444' },
  { position: 4, name: 'Nicholson 1', surname: 'Galela', phone: '555555555' },
  { position: 5, name: 'Nicholson 1', surname: 'Galela', phone: '666666666' },
  { position: 6, name: 'Nicholson 1', surname: 'Galela', phone: '777777777  ' },
];

export class PhonebookService {

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  //filter contacts
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editContact(contactId) {

  }

  //delte contact
  deleteContact(id) {
    let contacts = this.dataSource.filteredData;

    //filter the json array
    let updatedContactList = contacts.filter(function (contact) {
      return contact.position !== id.contactId;
    });

    this.dataSource.data = updatedContactList;
  }

  //method to create contact
  createContant(contact) {
    let contacts = this.dataSource.filteredData;

    //push the created contact to the existing default object
    contacts.push(contact);

    //count to increment the position key
    let allContactsCount = contacts.length;

    debugger

    contact.position = allContactsCount;

    //calling method to render initials after I have recieved the name and surname inputs
    this.renderInitials();

    //update the previous data with new data
    this.dataSource.data = contacts;

  }

  //method to render the data on the table
  renderInitials() {

    //pushing the object into the contacts variable 
    let contacts = this.dataSource.filteredData;

    //count set to -1 because the for each starts counting from 1 and from 0 like an array
    let count = -1;
    contacts.forEach((contact) => {
      count++;
      let initial = contact.name.charAt(0) + " " + contact.surname.charAt(0);

      //pushing the initials into my object using First name and Surname
      contacts[count]['initials'] = initial;
    });
  }
}
