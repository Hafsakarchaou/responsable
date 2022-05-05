import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationAgentComponent } from './modification-agent.component';

describe('ModificationAgentComponent', () => {
  let component: ModificationAgentComponent;
  let fixture: ComponentFixture<ModificationAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
