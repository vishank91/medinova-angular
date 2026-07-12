import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-package',
  standalone: false,
  templateUrl: './package.html',
  styleUrl: './package.css',
})
export class Package implements AfterViewInit {
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
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });

    swiperEl.initialize();
  }
}
