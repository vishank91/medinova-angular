import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminSidebar } from './components/admin-sidebar/admin-sidebar';
import { AdminHomePage } from './pages/home/admin-home-page/admin-home-page';
import { AdminServicePage } from './pages/service/admin-service-page/admin-service-page';
import { AdminCreateServicePage } from './pages/service/admin-create-service-page/admin-create-service-page';
import { AdminUpdateServicePage } from './pages/service/admin-update-service-page/admin-update-service-page';
import { AdminPackagePage } from './pages/package/admin-package-page/admin-package-page';
import { AdminCreatePackagePage } from './pages/package/admin-create-package-page/admin-create-package-page';
import { AdminUpdatePackagePage } from './pages/package/admin-update-package-page/admin-update-package-page';
import { AdminDepartmentPage } from './pages/department/admin-department-page/admin-department-page';
import { AdminCreateDepartmentPage } from './pages/department/admin-create-department-page/admin-create-department-page';
import { AdminUpdateDepartmentPage } from './pages/department/admin-update-department-page/admin-update-department-page';
import { AdminDoctorPage } from './pages/doctor/admin-doctor-page/admin-doctor-page';
import { AdminCreateDoctorPage } from './pages/doctor/admin-create-doctor-page/admin-create-doctor-page';
import { AdminUpdateDoctorPage } from './pages/doctor/admin-update-doctor-page/admin-update-doctor-page';
import { AdminTestimonialPage } from './pages/testimonial/admin-testimonial-page/admin-testimonial-page';
import { AdminCreateTestimonialPage } from './pages/testimonial/admin-create-testimonial-page/admin-create-testimonial-page';
import { AdminUpdateTestimonialPage } from './pages/testimonial/admin-update-testimonial-page/admin-update-testimonial-page';
import { FrontModule } from '../front/front-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminSidebar,
    AdminHomePage,
    AdminServicePage,
    AdminCreateServicePage,
    AdminUpdateServicePage,
    AdminPackagePage,
    AdminCreatePackagePage,
    AdminUpdatePackagePage,
    AdminDepartmentPage,
    AdminCreateDepartmentPage,
    AdminUpdateDepartmentPage,
    AdminDoctorPage,
    AdminCreateDoctorPage,
    AdminUpdateDoctorPage,
    AdminTestimonialPage,
    AdminCreateTestimonialPage,
    AdminUpdateTestimonialPage,
  ],
  imports: [CommonModule, AdminRoutingModule, FrontModule,ReactiveFormsModule],
})
export class AdminModule { }
