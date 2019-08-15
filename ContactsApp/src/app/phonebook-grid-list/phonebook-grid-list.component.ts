import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../phonebook-grid-list/phonebook.service';
import { MatDialog } from '@angular/material/dialog';
import { EditContactDialogComponent } from '../edit-contact-dialog/edit-contact-dialog.component';
import { DeleteContactDialogComponent } from '../delete-contact-dialog/delete-contact-dialog.component';

@Component({
  selector: 'phonebook-grid-list',
  templateUrl: './phonebook-grid-list.component.html',
  styleUrls: ['./phonebook-grid-list.component.css']
})

export class PhonebookGridListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'surname', 'phone', 'action'];
  dataSource = this.phonebookService.dataSource;

  constructor(public phonebookService: PhonebookService, public dialog: MatDialog) {  }

  ngOnInit() {
    //render initials method from the phoneBook service
    this.phonebookService.renderInitials();
  }

  deleteContact(id: number) {
    this.phonebookService.deleteContact(id)
  }

  //open delete contact modal
  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteContactDialogComponent, {
      width: '500px',
      data: {
        contactId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //open edit contact modal
  openEditModal(id: number) {
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      width: '500px',
      data: {
        contactDetails: this.dataSource.filteredData,
        contactId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
