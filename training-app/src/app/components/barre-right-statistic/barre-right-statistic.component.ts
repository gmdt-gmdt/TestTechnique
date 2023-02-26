import { Component } from '@angular/core';

@Component({
  selector: 'app-barre-right-statistic',
  templateUrl: './barre-right-statistic.component.html',
  styleUrls: ['./barre-right-statistic.component.css'],
})
export class BarreRightStatisticComponent {
  color = 'prmary';
  mode = 'determinate';
  value = 50;
}
