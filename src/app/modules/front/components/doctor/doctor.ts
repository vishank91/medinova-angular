import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.html',
  styleUrl: './doctor.css',
})
export class Doctor implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiper.nativeElement;

    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: true,
      loop: true,
      pagination: {
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });

    swiperEl.initialize();
  }
}
