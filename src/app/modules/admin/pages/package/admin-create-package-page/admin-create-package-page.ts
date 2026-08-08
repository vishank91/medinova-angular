import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../services/data-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-create-package-page',
  standalone: false,
  templateUrl: './admin-create-package-page.html',
  styleUrl: './admin-create-package-page.css',
})
export class AdminCreatePackagePage {
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    basePrice: new FormControl("", Validators.required),
    discount: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    status: new FormControl("1")
  })
  pic = ""
  picError = false

  get name(): any {
    return this.myForm.get("name")
  }

  get basePrice(): any {
    return this.myForm.get("basePrice")
  }

  get discount(): any {
    return this.myForm.get("discount")
  }

  get shortDescription(): any {
    return this.myForm.get("shortDescription")
  }

  constructor(private dataService: DataService, private router: Router) { }

  postData() {
    if (this.pic !== "") {
      let bp = Number(this.myForm.value.basePrice ?? "")
      let d = Number(this.myForm.value.discount ?? "")
      let fp = Number(bp - bp * d / 100)

      let item = {
        name: this.myForm.value.name,
        basePrice: Math.round(bp),
        discount: Math.round(d),
        finalPrice: Math.round(fp),
        shortDescription: this.myForm.value.shortDescription,
        pic: this.pic,
        status: this.myForm.value.status === "1" ? true : false
      }
      this.dataService.createData("package", item).subscribe((response: any) => {
        if (response)
          this.router.navigate(['/admin/package'])
        else
          alert("Internal Server Error")
      })
    }
    else
      this.picError = true
  }

  getInputFile(event: any) {
    this.pic = `packages/` + event.target.files[0].name
    this.picError = false
  }
}
