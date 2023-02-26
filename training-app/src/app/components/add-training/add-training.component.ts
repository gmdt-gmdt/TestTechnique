import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css'],
})
export class AddTrainingComponent {
  selectedOption: any;
  analysis: any;

  addTraining() {
    console.log(this.selectedOption, this.trainingForm);
  }
  trainingForm = this.fb.group({
    name: [''],
    logs: [''],
    progress: [''],
    analysis_id: [''],
  });
  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService
  ) {}
  ngOnInit(): void {
    this.trainingService.getAllAnalysis().subscribe((data) => {
      this.analysis = data;
    });
  }
}
