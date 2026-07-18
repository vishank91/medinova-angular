import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateTestimonialPage } from './admin-update-testimonial-page';

describe('AdminUpdateTestimonialPage', () => {
  let component: AdminUpdateTestimonialPage;
  let fixture: ComponentFixture<AdminUpdateTestimonialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateTestimonialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateTestimonialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
