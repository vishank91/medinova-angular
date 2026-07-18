import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-create-service-page',
  standalone: false,
  templateUrl: './admin-create-service-page.html',
  styleUrl: './admin-create-service-page.css',
})
export class AdminCreateServicePage {
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    icon: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    status: new FormControl(true)
  })

  get name() {
    return this.myForm.get("name")
  }

  get icon() {
    return this.myForm.get("icon")
  }

  get shortDescription() {
    return this.myForm.get("shortDescription")
  }

  get description() {
    return this.myForm.get("description")
  }
}
