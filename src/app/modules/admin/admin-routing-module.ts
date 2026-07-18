import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: "",
    component: AdminHomePage
  },
  {
    path: "service",
    component: AdminServicePage
  },
  {
    path: "service/create",
    component: AdminCreateServicePage
  },
  {
    path: "service/update",
    component: AdminUpdateServicePage
  },
  {
    path: "package",
    component: AdminPackagePage
  },
  {
    path: "package/create",
    component: AdminCreatePackagePage
  },
  {
    path: "package/update",
    component: AdminUpdatePackagePage
  },
  {
    path: "department",
    component: AdminDepartmentPage
  },
  {
    path: "department/create",
    component: AdminCreateDepartmentPage
  },
  {
    path: "department/update",
    component: AdminUpdateDepartmentPage
  },
  {
    path: "doctor",
    component: AdminDoctorPage
  },
  {
    path: "doctor/create",
    component: AdminCreateDoctorPage
  },
  {
    path: "doctor/update",
    component: AdminUpdateDoctorPage
  },
  {
    path: "testimonial",
    component: AdminTestimonialPage
  },
  {
    path: "testimonial/create",
    component: AdminCreateTestimonialPage
  },
  {
    path: "testimonial/update",
    component: AdminUpdateTestimonialPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
