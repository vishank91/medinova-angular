import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-package-page',
  standalone: false,
  templateUrl: './admin-update-package-page.html',
  styleUrl: './admin-update-package-page.css',
})
export class AdminUpdatePackagePage {
  id: string = ""
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    basePrice: new FormControl("", Validators.required),
    discount: new FormControl("", Validators.required),
    shortDescription: new FormControl("", Validators.required),
    status: new FormControl("1")
  })
  pic = ""

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

  constructor(private dataService: DataService, private router: Router, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams?.subscribe((params: any) => {
      this.id = params.id
      this.dataService.getSingleData("package", this.id).subscribe((response: any) => {
        this.myForm.patchValue({
          name: response.name,
          basePrice: response.basePrice,
          discount: response.discount,
          shortDescription: response.shortDescription,
          status: response.status ? "1" : "0",
        })
        this.pic = response.pic
      })
    })
  }

  postData() {
    if (this.pic !== "") {
      let bp = Number(this.myForm.value.basePrice ?? "")
      let d = Number(this.myForm.value.discount ?? "")
      let fp = Number(bp - bp * d / 100)

      let item = {
        id: this.id,
        name: this.myForm.value.name,
        basePrice: Math.round(bp),
        discount: Math.round(d),
        finalPrice: Math.round(fp),
        shortDescription: this.myForm.value.shortDescription,
        pic: this.pic,
        status: this.myForm.value.status === "1" ? true : false
      }
      this.dataService.updateData("package", item).subscribe((response: any) => {
        if (response)
          this.router.navigate(['/admin/package'])
        else
          alert("Internal Server Error")
      })
    }
  }

  getInputFile(event: any) {
    this.pic = `packages/` + event.target.files[0].name
  }
}
