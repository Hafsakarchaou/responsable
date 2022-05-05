import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdecComponent } from './consulterdec.component';

describe('ConsulterdecComponent', () => {
  let component: ConsulterdecComponent;
  let fixture: ComponentFixture<ConsulterdecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterdecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
