import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/Training';
import { TrainingService } from '../../services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css'],
})
export class TrainingListComponent implements OnInit {
  trainings: any;
  image: any;
  breakpoint!: number;
  trainingSelected: any;

  constructor(private trainingService: TrainingService) {}
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
    this.trainingService.getdata().subscribe((data) => {
      this.trainings = data;
    });
    this.trainingService
      .getTrainingById(1)
      .subscribe((training) => (this.trainingSelected = training));
  }
  /*  getImagets(id: number){
    this.trainingService.getImage(id).subscribe(data=>{this.image})
    return this.image;
  } */

  openDetail(elt: any) {
    this.trainingService
      .getTrainingById(elt.id)
      .subscribe((training) => (this.trainingSelected = training));
  }
}
