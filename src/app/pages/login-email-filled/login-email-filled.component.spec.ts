import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmailFilledComponent } from './login-email-filled.component';

describe('LoginEmailFilledComponent', () => {
  let component: LoginEmailFilledComponent;
  let fixture: ComponentFixture<LoginEmailFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginEmailFilledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginEmailFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
