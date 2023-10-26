import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PrescriptionComponent,
    FooterComponent,
    ConfirmationComponent,
    AboutComponent,
    HomeComponent,
    BookingComponent,
    RegistrationComponent,
    NavComponent,
    LandingpageComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    NgIf,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
