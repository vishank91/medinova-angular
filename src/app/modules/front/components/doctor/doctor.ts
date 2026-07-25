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
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.html',
  styleUrl: './doctor.css',
})
export class Doctor implements AfterViewInit {

  @ViewChild('swiper') swiper?: ElementRef;

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {

    if (!this.isBrowser) {
      return;
    }

    // Wait until Angular renders the *ngIf/@if block
    setTimeout(() => {

      if (!this.swiper) {
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
          }
        }
      });

      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      }

    });

  }
}