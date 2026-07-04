import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ServicePage } from './pages/service-page/service-page';
import { PackagePage } from './pages/package-page/package-page';
import { DoctorPage } from './pages/doctor-page/doctor-page';
import { AppointmentPage } from './pages/appointment-page/appointment-page';
import { TestimonialPage } from './pages/testimonial-page/testimonial-page';
import { ContactPage } from './pages/contact-page/contact-page';

const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "about",
    component: AboutPage
  },
  {
    path: "service",
    component: ServicePage
  },
  {
    path: "package",
    component: PackagePage
  },
  {
    path: "doctor",
    component: DoctorPage
  },
  {
    path: "appointment",
    component: AppointmentPage
  },
  {
    path: "testimonial",
    component: TestimonialPage
  },
  {
    path: "contact",
    component: ContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule { }
