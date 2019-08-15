"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_1 = require("@angular/material/table");
//default static data defined 
var ELEMENT_DATA = [
    { position: 1, name: 'Nicholson', surname: 'Galela', phone: '840739163' }
];
var PhonebookService = /** @class */ (function () {
    function PhonebookService() {
        this.dataSource = new table_1.MatTableDataSource(ELEMENT_DATA);
    }
    //filter contacts
    PhonebookService.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PhonebookService.prototype.renderEditDeleteButton = function () {
        return ("test");
    };
    PhonebookService.prototype.editContact = function (contactId) {
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