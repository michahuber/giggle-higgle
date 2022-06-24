import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleShopComponent } from './example-shop.component';

describe('ExampleShopComponent', () => {
  let component: ExampleShopComponent;
  let fixture: ComponentFixture<ExampleShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
