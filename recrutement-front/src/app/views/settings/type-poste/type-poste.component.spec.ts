import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePosteComponent } from './type-poste.component';

describe('TypePosteComponent', () => {
  let component: TypePosteComponent;
  let fixture: ComponentFixture<TypePosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
