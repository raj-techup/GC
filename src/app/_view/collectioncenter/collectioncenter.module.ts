import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
import { CollectioncenterComponent } from './collectioncenter/collectioncenter.component';

// import{ChatbotComponent} from './../chatbot/chatbot.component'

const routes: Routes = [
  { path: '',
  component: CollectioncenterComponent,
}
]

@NgModule({
  declarations: [
    CollectioncenterComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
     
  ],
  providers: [],
})
export class CollectioncenterModule { }
