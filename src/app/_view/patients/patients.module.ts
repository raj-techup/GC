import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
import { PatientComponent } from './patient/patient.component';

// import{ChatbotComponent} from './../chatbot/chatbot.component'

const routes: Routes = [
  { path: '',
  component: PatientComponent,
}
]

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
     
  ],
  providers: [],
})
export class PatientsModule { }
