import { Component } from '@angular/core';

@Component({
  selector: 'app-logstat',
  templateUrl: './logstat.component.html',
  styleUrls: ['./logstat.component.css'],
})
export class LogstatComponent {
  public SystemName: string = 'MF1';
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [1, 2, 49];

  public labelMFL: Array<any> = [{ data: this.lineChartData }];
  // labels
  public lineChartLabels: Array<any> = ['1#', '2#', '3#'];

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
          size: 14,
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

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  tiles = [
    { text: 'One', cols: 2, rows: 0.25, color: 'lightblue' },
    { text: 'One', cols: 2, rows: 0.25, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
  ];
}
