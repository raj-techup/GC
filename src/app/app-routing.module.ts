
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './_view/base/base.component';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../app/_view/home/home.module').then(m => m.HomeModule)
   
      },
      {
        path: 'aboutus',
        loadChildren: () => import('../app/_view/about/about.module').then(m => m.AboutModule)
   
      },
      {
        path: 'missionvision',
        // component:
        loadChildren: () => import('../app/_view/mission/mission.module').then(m => m.MissionModule)
   
      },
      {
        path: 'for-patients-consumers',
        // component:
        loadChildren: () => import('../app/_view/patients/patients.module').then(m => m.PatientsModule)
   
      },
      {
        path: 'affiliated-insurance-companies',
        // component:
        loadChildren: () => import('../app/_view/affilatedcompony/affilatedcompony.module').then(m => m.AffilatedcomponyModule)
   
      },
      {
        path: 'our-team',
        // component:
        loadChildren: () => import('../app/_view/teams/teams.module').then(m => m.TeamsModule)
   
      }, {
        path: 'our-collection-centres',
        // component:
        loadChildren: () => import('../app/_view/collectioncenter/collectioncenter.module').then(m => m.CollectioncenterModule)
   
      },
      {
        path: 'our-diagnostic-centres',
        // component:
        loadChildren: () => import('../app/_view/diagonasiscenter/diagonasiscenter.module').then(m => m.DiagonasiscenterModule)
   
      },{
        path: 'testing-options',
        // component:
        loadChildren: () => import('../app/_view/testingoptions/testingoptions.module').then(m => m.TestingoptionsModule)
   
      },{
        path: 'quality-assurance',
        // component:
        loadChildren: () => import('../app/_view/qa/qa.module').then(m => m.QaModule)
   
      },{
        path: 'labhome',
        // component:
        loadChildren: () => import('../app/_view/labshome/labshome.module').then(m => m.LabshomeModule)
   
      },{
        path: 'faqs',
        // component:
        loadChildren: () => import('../app/_view/faqs/faqs.module').then(m => m.FaqsModule)
   
      },{
        path: 'careers-with-green-cross',
        // component:
        loadChildren: () => import('../app/_view/career/career.module').then(m => m.CareerModule)
   
      },{
        path: 'contact_us',
        // component:
        loadChildren: () => import('../app/_view/contactus/contactus.module').then(m => m.ContactusModule)
   
      },
      
      
      
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
