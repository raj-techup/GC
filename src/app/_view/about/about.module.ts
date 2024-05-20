import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
import { AboutmainpageComponent } from './aboutmainpage/aboutmainpage.component';

// import{ChatbotComponent} from './../chatbot/chatbot.component'

const routes: Routes = [
  { path: '',
  component: AboutmainpageComponent,
}
]

@NgModule({
  declarations: [
    AboutmainpageComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
     
  ],
  providers: [],
  })
export class AboutModule { }
