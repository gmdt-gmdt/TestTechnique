import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { TrainingComponent } from './components/training/training.component';
import { EssaieComponent } from './components/essaie/essaie.component';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { BarreRightStatisticComponent } from './barre-right-statistic/barre-right-statistic.component';
import { LogstatComponent } from './components/logstat/logstat.component';
import { FormsModule } from '@angular/forms';
// import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    EssaieComponent,
    TrainingListComponent,
    MenuComponent,
    BarreRightStatisticComponent,
    LogstatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    // NgChartsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
