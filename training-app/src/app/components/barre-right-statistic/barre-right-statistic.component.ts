import { Component } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-barre-right-statistic',
  templateUrl: './barre-right-statistic.component.html',
  styleUrls: ['./barre-right-statistic.component.css'],
})
export class BarreRightStatisticComponent {
  color = 'prmary';
  mode = 'determinate';
  value = 50;
  casse: any;
  bonne: any;
  constructor(private trainingService: TrainingService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.trainingService
      .getDonneeCasse()
      .subscribe((data: any) => (this.casse = data));
    this.trainingService
      .getDonneeBonne()
      .subscribe((data: any) => (this.bonne = data));
  }
}
