import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './components/training/training.component';
import { EssaieComponent } from './components/essaie/essaie.component';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { BarreRightStatisticComponent } from './barre-right-statistic/barre-right-statistic.component';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    EssaieComponent,
    TrainingListComponent,
    MenuComponent,
    BarreRightStatisticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
