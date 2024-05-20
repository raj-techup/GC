import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
import { DiagonasiscenterComponent } from './diagonasiscenter/diagonasiscenter.component';

// import{ChatbotComponent} from './../chatbot/chatbot.component'

const routes: Routes = [
  { path: '',
  component: DiagonasiscenterComponent,
}
]

@NgModule({
  declarations: [
    DiagonasiscenterComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
     
  ],
  providers: [],
})
export class DiagonasiscenterModule { }
