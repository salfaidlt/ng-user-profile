import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { UserLocationComponent } from "./components/user-location/user-location.component";
import { SocialLinkComponent } from "./components/social-link/social-link.component";
import SocialLink from './models/social-links';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, UserLocationComponent, SocialLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-profile';
  selectedLink: SocialLink = {
    name: "",
    link: ""
  };
  linkTab: SocialLink[] = []

  constructor (private dataService: DataService) {

  }

  ngOnInit() {
    this.linkTab = this.dataService.getLinks()
  }

  onClickedLink(socialLink_: SocialLink) {
    this.selectedLink = socialLink_;
  }

  onResetLink() {
    this.selectedLink = {
      name: "",
      link: ""
    }
  }
}
