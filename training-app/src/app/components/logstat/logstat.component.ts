import { Component, Input, OnInit } from '@angular/core';

const data = [
  61, 80, 7, 38, 19, 70, 21, 1, 10, 57, 12, 9, 22, 43, 65, 55, 15, 87, 78, 93,
];

@Component({
  selector: 'app-logstat',
  templateUrl: './logstat.component.html',
  styleUrls: ['./logstat.component.css'],
})
export class LogstatComponent implements OnInit {
  @Input() training = { validation_set: data };
  //initialize default value
  @Input() result = {
    train_set: {
      classes: ['bonne', 'cassée'],
      confusion_matrix: [
        [16, 17],
        [11, 16],
      ],
      'f1-score': [0.48484848484848486, 0.5925925925925926],
    },
    validation_set: {
      classes: ['bonne', 'cassée'],
      confusion_matrix: [
        [3, 6],
        [4, 7],
      ],
      'f1-score': [0.3333333333333333, 0.6363636363636364],
    },
  };
  @Input() dataScore: number[] = [];
  @Input() dataId: string[] = [];
  labelMFL!: { data: number[] }[];

  // data
  lineChartData: Array<number> = [...this.training.validation_set];

  // labels
  lineChartLabels: Array<any> = [
    ...this.training.validation_set.map((item) => `#${item}`),
  ];

  lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            max: 100,
            min: 0,
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          ticks: {},
        },
      ],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        //color: "#2756B3",
        color: '#222',

        font: {
          family: 'FontAwesome',
          size: 16,
        },
      },
      deferred: false,
    },
  };

  _lineChartColors: Array<any> = [
    {
      backgroundColor: 'blue',
      borderColor: 'blue',
      pointBackgroundColor: 'blue',
      pointBorderColor: 'blue',
      pointHoverBackgroundColor: 'blue',
      pointHoverBorderColor: 'blue',
    },
  ];

  ChartType = 'bar';

  tiles = [
    {
      text: '',
      cols: 2,
      rows: 0.25,
      color: 'lightblue',
    },
    {
      text: '',
      cols: 2,
      rows: 0.25,
      color: 'lightblue',
    },
    {
      text: `${this.result.train_set.confusion_matrix[0][0]}`,
      cols: 2,
      rows: 1,
      color: 'lightgreen',
    },
    {
      text: `${this.result.train_set.confusion_matrix[0][1]}`,
      cols: 2,
      rows: 1,
      color: 'lightpink',
    },
    {
      text: `${this.result.train_set.confusion_matrix[1][0]}`,
      cols: 2,
      rows: 1,
      color: '#DDBDF1',
    },
    {
      text: `${this.result.train_set.confusion_matrix[1][1]}`,
      cols: 2,
      rows: 1,
      color: 'lightblue',
    },
  ];

  ngOnInit(): void {
    this.labelMFL = [{ data: this.dataScore }];
  }
}
