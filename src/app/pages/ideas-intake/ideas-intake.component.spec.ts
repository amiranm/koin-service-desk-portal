import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasIntakeComponent } from './ideas-intake.component';

describe('IdeasIntakeComponent', () => {
  let component: IdeasIntakeComponent;
  let fixture: ComponentFixture<IdeasIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeasIntakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdeasIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
