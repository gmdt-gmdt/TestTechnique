import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreRightStatisticComponent } from './barre-right-statistic.component';

describe('BarreRightStatisticComponent', () => {
  let component: BarreRightStatisticComponent;
  let fixture: ComponentFixture<BarreRightStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreRightStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreRightStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
