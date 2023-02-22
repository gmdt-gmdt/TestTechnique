import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './components/training/training.component';



const routes: Routes = [{path:"training-list",component:TrainingComponent},
{ path: '**', component: TrainingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

