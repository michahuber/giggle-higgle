import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinecalcComponent } from './onlinecalc.component';

describe('OnlinecalcComponent', () => {
  let component: OnlinecalcComponent;
  let fixture: ComponentFixture<OnlinecalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinecalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinecalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
