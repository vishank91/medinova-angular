import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../../../../../services/data-service';

@Component({
  selector: 'app-admin-service-page',
  standalone: false,
  templateUrl: './admin-service-page.html',
  styleUrl: './admin-service-page.css',
})
export class AdminServicePage {
  data: any = []

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.dataService.getData("service").subscribe((response: any) => {
      this.data = response.map((x: any) => ({
        ...x,
        icon: this.sanitizer.bypassSecurityTrustHtml(x.icon)
      }))
      this.cdr.detectChanges()
    })
  }

  deleteRecord(id: any) {
    if (window && window.confirm("Are Your Sure You Want To Delete That Record : ")) {
      this.dataService.deleteData("service", id).subscribe((response: any) => {
        this.data = [...this.data.filter((x: any) => x.id !== id)]
        this.cdr.detectChanges()
      })
    }
  }
}
