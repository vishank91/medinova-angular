import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./modules/front/front-module").then(m => m.FrontModule)
    },
    {
        path: "admin",
        loadChildren: () => import("./modules/admin/admin-module").then(m => m.AdminModule)
    },
];
