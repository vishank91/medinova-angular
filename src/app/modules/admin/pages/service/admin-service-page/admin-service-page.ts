import { Component } from '@angular/core';
import { DataService } from '../../../../../services/data-service';

@Component({
  selector: 'app-admin-service-page',
  standalone: false,
  templateUrl: './admin-service-page.html',
  styleUrl: './admin-service-page.css',
})
export class AdminServicePage {
  data: any = []

  constructor(private dataService: DataService) {
    this.dataService.getData("service").subscribe((response: any) => {
      this.data = response
    })
  }
}
