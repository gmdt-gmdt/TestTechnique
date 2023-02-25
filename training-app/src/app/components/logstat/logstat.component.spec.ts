import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogstatComponent } from './logstat.component';

describe('LogstatComponent', () => {
  let component: LogstatComponent;
  let fixture: ComponentFixture<LogstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogstatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
