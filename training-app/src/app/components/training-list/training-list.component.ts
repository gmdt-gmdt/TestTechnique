import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css'],
})
export class TrainingListComponent implements OnInit {
  trainingsData: any;
  trainingsList: any;
  image: any;
  breakpoint!: number;
  trainingSelected: any;
  showDivLog = false;
  shownAddingTrainingForm = false;
  lastTraining: any;

  constructor(private trainingService: TrainingService) {}
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
    this.trainingService.getdata().subscribe((data) => {
      this.trainingsData = data;
    });

    this.trainingService
      .getTrainingById(1)
      .subscribe((training) => (this.trainingSelected = training));

    this.trainingService.getAllTrainig().subscribe((data) => {
      this.trainingsList = data;
      const len = this.trainingsList.length;
      this.lastTraining = this.trainingsList[0];
    });
  }

  openDetail(elt: any) {
    this.trainingService.getTrainingById(elt.id);
  }
}
