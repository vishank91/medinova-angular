import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../../../../../services/data-service';
import { environment } from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-package-page',
  standalone: false,
  templateUrl: './admin-package-page.html',
  styleUrl: './admin-package-page.css',
})
export class AdminPackagePage {
  data: any = []
  imageServerURL = environment.imageServerURL
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.dataService.getData("package").subscribe((response: any) => {
      this.data = response.map((x: any) => ({
        ...x,
        icon: this.sanitizer.bypassSecurityTrustHtml(x.icon)
      }))
      this.cdr.detectChanges()
    })
  }

  deleteRecord(id: any) {
    if (window && window.confirm("Are Your Sure You Want To Delete That Record : ")) {
      this.dataService.deleteData("package", id).subscribe((response: any) => {
        this.data = [...this.data.filter((x: any) => x.id !== id)]
        this.cdr.detectChanges()
      })
    }
  }
}
