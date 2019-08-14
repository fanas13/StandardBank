import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../phonebook-grid-list/phonebook.service'
import { debug } from 'util';


@Component({
  selector: 'phonebook-grid-list',
  templateUrl: './phonebook-grid-list.component.html',
  styleUrls: ['./phonebook-grid-list.component.css']
})

export class PhonebookGridListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'surname', 'phone'];
  dataSource = this.phonebookService.dataSource;

  constructor(public phonebookService: PhonebookService) { }

  ngOnInit() {
    //render initials method from the phoneBook service
    this.phonebookService.renderInitials();
  }


}
