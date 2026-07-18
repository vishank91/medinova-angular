import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestimonialPage } from './admin-testimonial-page';

describe('AdminTestimonialPage', () => {
  let component: AdminTestimonialPage;
  let fixture: ComponentFixture<AdminTestimonialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTestimonialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTestimonialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
