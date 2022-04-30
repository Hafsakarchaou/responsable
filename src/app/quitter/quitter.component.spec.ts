import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitterComponent } from './quitter.component';

describe('QuitterComponent', () => {
  let component: QuitterComponent;
  let fixture: ComponentFixture<QuitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
