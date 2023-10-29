import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { VitalsComponent } from './vitals/vitals.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component: LandingpageComponent},
  {path:'landing', component: LandingpageComponent},
  {path:'about', component: AboutComponent},
  {path:'main', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'signup', component:SignupComponent  },
  {path:'login', component:LoginComponent  },
  {path:'register', component:RegistrationComponent  },
  {path:'prescription', component:PrescriptionComponent  },
  {path:'vitals', component:VitalsComponent  },
  {path:'contact', component:ContactComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
