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
  constructor(private trainingService: TrainingService) {}
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
    this.trainingService.getdata().subscribe((data) => {
      console.log(data);
      this.trainings = data;
    });
  }
  /*  getImagets(id: number){
    this.trainingService.getImage(id).subscribe(data=>{this.image})
    return this.image;
  } */

  openDetail(elt: any) {
    console.log(elt);
  }
}
