import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordCandidatSocieteComponent } from './change-password-candidat-societe.component';

describe('ChangePasswordCandidatSocieteComponent', () => {
  let component: ChangePasswordCandidatSocieteComponent;
  let fixture: ComponentFixture<ChangePasswordCandidatSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordCandidatSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordCandidatSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
