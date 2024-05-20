import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
import { ContactusComponent } from './contactus/contactus.component';

// import{ChatbotComponent} from './../chatbot/chatbot.component'

const routes: Routes = [
  { path: '',
  component: ContactusComponent,
}
]

@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
     
  ],
  providers: [],
})
export class ContactusModule { }
