import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  settingData = {
    siteName: environment.siteName,
    siteMap1: environment.siteMap1,
    siteAddress: environment.siteAddress,
    siteEmail: environment.siteEmail,
    sitePhone: environment.sitePhone,
    siteWhatsapp: environment.siteWhatsapp,
    siteFacebook: environment.siteFacebook,
    siteTwitter: environment.siteTwitter,
    siteLinkedin: environment.siteLinkedin,
    siteInstagram: environment.siteInstagram,
    siteYoutube: environment.siteYoutube,
  }

}
