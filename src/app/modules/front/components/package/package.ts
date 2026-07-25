import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-package',
  standalone: false,
  templateUrl: './package.html',
  styleUrl: './package.css',
})
export class Package implements AfterViewInit {

  @ViewChild('swiper') swiper?: ElementRef;

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {

    // Don't execute on the server
    if (!this.isBrowser) {
      return;
    }

    // Wait until Angular renders the swiper element
    setTimeout(() => {

      if (!this.swiper) {
        console.warn('Swiper element not found');
        return;
      }

      const swiperEl: any = this.swiper.nativeElement;

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

      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      } else {
        console.error('Swiper Element is not registered.');
      }

    });

  }
}