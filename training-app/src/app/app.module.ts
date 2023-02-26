import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LogstatComponent } from './components/logstat/logstat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { BarreRightStatisticComponent } from './components/barre-right-statistic/barre-right-statistic.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingListComponent,
    MenuComponent,
    BarreRightStatisticComponent,
    LogstatComponent,
    AddTrainingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgChartsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
