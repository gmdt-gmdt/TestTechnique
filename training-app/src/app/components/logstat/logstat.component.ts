import { Component, Input, OnInit } from '@angular/core';

const data = [
  61, 80, 7, 38, 19, 70, 21, 1, 10, 57, 12, 9, 22, 43, 65, 55, 15, 87, 78, 93,
];

@Component({
  selector: 'app-logstat',
  templateUrl: './logstat.component.html',
  styleUrls: ['./logstat.component.css'],
})
export class LogstatComponent {
  @Input() training = { validation_set: data };
  public SystemName: string = 'MF1';
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [...this.training.validation_set];

  public labelMFL: Array<any> = [{ data: this.lineChartData }];
  // labels
  public lineChartLabels: Array<any> = [
    ...this.training.validation_set.map((item) => `#${item}`),
  ];

  constructor() {}

  public lineChartOptions: any = {
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

  public ChartType = 'bar';

  tiles = [
    { text: 'One', cols: 2, rows: 0.25, color: 'lightblue' },
    { text: 'One', cols: 2, rows: 0.25, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
  ];
}
