import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatTableModule, MatInputModule } from '@angular/material';
import { PhonebookGridListComponent } from './phonebook-grid-list/phonebook-grid-list.component';
import { PhonebookService } from './phonebook-grid-list/phonebook.service';
import { AddContactDialogComponent } from './add-contact-dialog/add-contact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PhonebookGridListComponent,
    AddContactDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AppComponent, MainNavComponent, PhonebookGridListComponent, AddContactDialogComponent],
  providers: [PhonebookService],
  bootstrap: [AppComponent],
  entryComponents: [AddContactDialogComponent]
})
export class AppModule { }
