"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_1 = require("@angular/material/table");
//default static data defined 
var ELEMENT_DATA = [
    { position: 0, name: 'Nicholson 1', surname: 'Galela', phone: '111111111' },
    { position: 1, name: 'Nicholson 1', surname: 'Galela', phone: '222222222' },
    { position: 2, name: 'Nicholson 1', surname: 'Galela', phone: '333333333' },
    { position: 3, name: 'Nicholson 1', surname: 'Galela', phone: '444444444' },
    { position: 4, name: 'Nicholson 1', surname: 'Galela', phone: '555555555' },
    { position: 5, name: 'Nicholson 1', surname: 'Galela', phone: '666666666' },
    { position: 6, name: 'Nicholson 1', surname: 'Galela', phone: '777777777  ' },
];
var PhonebookService = /** @class */ (function () {
    function PhonebookService() {
        this.dataSource = new table_1.MatTableDataSource(ELEMENT_DATA);
    }
    //filter contacts
    PhonebookService.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PhonebookService.prototype.editContact = function (contactId, name, surname, phone) {
        var contacts = this.dataSource.filteredData;
        //filter the json array
        var updatedContactList = contacts.filter(function (contact) {
            debugger;
            //return contact.position !== id.contactId;
            contact.name = "test name";
        });
        this.dataSource.data = updatedContactList;
    };
    //delte contact
    PhonebookService.prototype.deleteContact = function (id) {
        var contacts = this.dataSource.filteredData;
        //filter the json array
        var updatedContactList = contacts.filter(function (contact) {
            return contact.position !== id.contactId;
        });
        this.dataSource.data = updatedContactList;
    };
    //method to create contact
    PhonebookService.prototype.createContant = function (contact) {
        var contacts = this.dataSource.filteredData;
        //push the created contact to the existing default object
        contacts.push(contact);
        //count to increment the position key
        var allContactsCount = contacts.length;
        debugger;
        contact.position = allContactsCount;
        //calling method to render initials after I have recieved the name and surname inputs
        this.renderInitials();
        //update the previous data with new data
        this.dataSource.data = contacts;
    };
    //method to render the data on the table
    PhonebookService.prototype.renderInitials = function () {
        //pushing the object into the contacts variable 
        var contacts = this.dataSource.filteredData;
        //count set to -1 because the for each starts counting from 1 and from 0 like an array
        var count = -1;
        contacts.forEach(function (contact) {
            count++;
            var initial = contact.name.charAt(0) + " " + contact.surname.charAt(0);
            //pushing the initials into my object using First name and Surname
            contacts[count]['initials'] = initial;
        });
    };
    return PhonebookService;
}());
exports.PhonebookService = PhonebookService;
//# sourceMappingURL=phonebook.service.js.map