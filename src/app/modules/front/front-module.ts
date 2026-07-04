import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing-module';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/home-page/home-page';
import { About } from './components/about/about';
import { Service } from './components/service/service';
import { Appointment } from './components/appointment/appointment';
import { Package } from './components/package/package';
import { Doctor } from './components/doctor/doctor';
import { Search } from './components/search/search';
import { Testimonial } from './components/testimonial/testimonial';
import { AboutPage } from './pages/about-page/about-page';
import { ServicePage } from './pages/service-page/service-page';
import { PackagePage } from './pages/package-page/package-page';
import { DoctorPage } from './pages/doctor-page/doctor-page';
import { TestimonialPage } from './pages/testimonial-page/testimonial-page';
import { AppointmentPage } from './pages/appointment-page/appointment-page';
import { ContactPage } from './pages/contact-page/contact-page';

@NgModule({
  declarations: [
    Navbar,
    Footer,
    HomePage,
    About,
    Service,
    Appointment,
    Package,
    Doctor,
    Search,
    Testimonial,
    AboutPage,
    ServicePage,
    PackagePage,
    DoctorPage,
    TestimonialPage,
    AppointmentPage,
    ContactPage,
  ],
  imports: [CommonModule, FrontRoutingModule],
})
export class FrontModule {}
