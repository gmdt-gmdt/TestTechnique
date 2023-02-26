import { Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { BarreRightStatisticComponent } from './components/barre-right-statistic/barre-right-statistic.component';
import { LogstatComponent } from './components/logstat/logstat.component';
import { TrainingListComponent } from './components/training-list/training-list.component';

export const ROUTES: Routes = [
  {
    path: 'training-list',
    component: TrainingListComponent,
    pathMatch: 'full',
  },
  {
    path: 'statistic',
    component: BarreRightStatisticComponent,
    pathMatch: 'full',
  },
  { path: 'logs', component: LogstatComponent },
  { path: '**', component: TrainingListComponent },
];
