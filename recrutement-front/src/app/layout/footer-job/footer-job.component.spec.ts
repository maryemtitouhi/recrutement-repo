import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterJobComponent } from './footer-job.component';

describe('FooterJobComponent', () => {
  let component: FooterJobComponent;
  let fixture: ComponentFixture<FooterJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
