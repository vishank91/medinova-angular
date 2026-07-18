import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateTestimonialPage } from './admin-create-testimonial-page';

describe('AdminCreateTestimonialPage', () => {
  let component: AdminCreateTestimonialPage;
  let fixture: ComponentFixture<AdminCreateTestimonialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateTestimonialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateTestimonialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
