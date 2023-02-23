import { Routes } from '@angular/router';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TrainingComponent } from './components/training/training.component';

export const ROUTES: Routes = [
  { path: 'training-list', component: TrainingComponent, pathMatch: 'full' },
  { path: 'statistic', component: StatisticComponent, pathMatch: 'full' },
  { path: '**', component: TrainingComponent },
];
