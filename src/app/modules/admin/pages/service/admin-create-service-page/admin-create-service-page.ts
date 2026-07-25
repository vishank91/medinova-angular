import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../services/data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-service-page',
  standalone: false,
  templateUrl: './admin-create-service-page.html',
  styleUrl: './admin-create-service-page.css',
})
export class AdminCreateServicePage {
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

  constructor(private dataService: DataService, private router: Router) { }

  postData() {
    let item = {
      name: this.myForm.value.name,
      icon: this.myForm.value.icon,
      shortDescription: this.myForm.value.shortDescription,
      status: this.myForm.value.status === "1" ? true : false
    }
    this.dataService.createData("service", item).subscribe((response: any) => {
      if (response)
        this.router.navigate(['/admin/service'])
      else
        alert("Internal Server Error")
    })
  }
}
