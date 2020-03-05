import { Component } from '@angular/core';

import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
  faGithub,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Iván Tajes';
  job = 'Frontend Developoer';
  description = 'Keeping myself alive';
  smallImage = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80';
  bigImage = 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c';

  // Icons
  rrss = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/emily-wazowski' },
    { icon: faInstagram, url: 'https://www.instagram.com/emily-wazowski' },
    { icon: faTwitter, url: 'https://twitter.com/emily-wazowski' },
    { icon: faFacebook, url: 'https://www.facebook.com/emily-wazowski' },
    { icon: faGithub, url: 'https://github.com/emily-wazowski' },
    { icon: faSpotify, url: 'https://open.spotify.com/user/emily-wazowski' }
  ]

  navigateTo(url: string) {
    window.open(url);
  }

}
