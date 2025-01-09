import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserLocationComponent } from "./user-location/user-location.component";
import { SocialLinkComponent } from "./social-link/social-link.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, UserLocationComponent, SocialLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-profile';
  selectedLink = '';
  onClickedLink(link: string) {
    this.selectedLink = link;
  }
}
