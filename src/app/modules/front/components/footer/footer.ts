import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
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
