import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
import { QaComponent } from './qa/qa.component';

// import{ChatbotComponent} from './../chatbot/chatbot.component'

const routes: Routes = [
  { path: '',
  component: QaComponent,
}
]

@NgModule({
  declarations: [
    QaComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
     
  ],
  providers: [],
})
export class QaModule { }


