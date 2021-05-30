import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { environment } from 'src/environments/environment';
import { ServiceSpecificationsComponent } from './ServiceSpecifications/ServiceSpecifications.component';
import { ServiceSpecificationComponent } from './ServiceSpecifications/ServiceSpecification/ServiceSpecification.component';
import { ServiceSpecificationListComponent } from './ServiceSpecifications/ServiceSpecification-list/ServiceSpecification-list.component';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ServiceSpecificationsComponent,
    ServiceSpecificationComponent,
    ServiceSpecificationListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule,
    AngularFirestoreModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
