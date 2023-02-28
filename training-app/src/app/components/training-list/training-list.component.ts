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
  result!: any;
  trainingsResult: any;
  dataScore: number[] = [];
  dataId: string[] = [];

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
      this.lastTraining = this.trainingsList[0];
      this.getAverageScore();
    });
    // this.trainingService
    //   .getTrainingByIdResult(this.trainingResult.id)
    //   .subscribe((trainingResult) => (this.result = trainingResult));
  }

  openDetail(elt: any) {
    this.trainingService.getTrainingById(elt.id);
  }
  getAverageScore() {
    for (const val of this.trainingsList) {
      this.trainingService
        .getTrainingByIdResult(val.id)
        .subscribe((trainingData) => {
          this.trainingsResult = trainingData;
          let sum = 0;
          const len = this.trainingsResult?.train_set['f1-score'].length;
          for (const item of this.trainingsResult?.train_set['f1-score']) {
            sum += item;
          }
          const resultF1 = (sum / len) * 100;
          this.dataScore.push(resultF1);
          this.dataId.push(`${val.id}#`);
        });
    }
  }
}
