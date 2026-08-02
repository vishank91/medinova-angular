import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-update-service-page',
  standalone: false,
  templateUrl: './admin-update-service-page.html',
  styleUrl: './admin-update-service-page.css',
})
export class AdminUpdateServicePage {
  id: string = ""
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    icon: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    status: new FormControl("1")
  })

  get name(): any {
    return this.myForm.get("name")
  }

  get icon(): any {
    return this.myForm.get("icon")
  }

  get shortDescription(): any {
    return this.myForm.get("shortDescription")
  }

  constructor(private dataService: DataService, private router: Router, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams?.subscribe((params: any) => {
      this.id = params.id
      this.dataService.getSingleData("service", this.id).subscribe((response: any) => {
        this.myForm.patchValue({
          name: response.name,
          icon: response.icon,
          shortDescription: response.shortDescription,
          status: response.status ? "1" : "0",
        })
      })
    })
  }

  postData() {
    let item = {
      id:this.id,
      name: this.myForm.value.name,
      icon: this.myForm.value.icon,
      shortDescription: this.myForm.value.shortDescription,
      status: this.myForm.value.status === "1" ? true : false
    }
    this.dataService.updateData("service", item).subscribe((response: any) => {
      if (response)
        this.router.navigate(['/admin/service'])
      else
        alert("Internal Server Error")
    })
  }
}
