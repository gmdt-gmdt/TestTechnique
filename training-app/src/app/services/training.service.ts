import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Training } from '../models/Training';
import { Resultat } from '../models/Resultat';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  url = 'http://localhost:5000/trainings';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllTrainig() {
    return this.http.get(this.url);
  }

  getAllAnalysis() {
    return this.http.get('http://localhost:5000/analysis');
  }

  getTrainingById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  creatTraining(training: Training) {
    return this.http.post(this.url, training, this.httpOptions);
  }
  ///////////////////////////DILI///////////////////////////////////////
  getTrainingResult(id: number, resultat: Resultat) {
    return this.http.get(this.getTrainingById(id) + '/' + resultat);
  }
  getdata() {
    return this.http.get('http://localhost:5000/data');
  }
  getImage(id: Number) {
    return this.http.get('http://localhost:5000/data' + id + 'image');
  }
}
///////////////////////////////DILI/////////////////////////////////////////////
