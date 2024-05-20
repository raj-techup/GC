import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
import { HomeComponent } from './home/home.component';

// import{ChatbotComponent} from './../chatbot/chatbot.component'

const routes: Routes = [
  { path: '',
  component: HomeComponent,
}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
     
  ],
  providers: [],
  // exports:[ChatbotComponent]
})
export class HomeModule { }
