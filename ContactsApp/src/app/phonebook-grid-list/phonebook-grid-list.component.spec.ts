import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookGridListComponent } from './phonebook-grid-list.component';

describe('PhonebookGridListComponent', () => {
  let component: PhonebookGridListComponent;
  let fixture: ComponentFixture<PhonebookGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
