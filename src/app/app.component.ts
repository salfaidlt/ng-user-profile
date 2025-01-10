import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { UserLocationComponent } from "./components/user-location/user-location.component";
import { SocialLinkComponent } from "./components/social-link/social-link.component";
import SocialLink from './models/social-links';
import { DataService } from './services/data.service';
import UserProfile from './models/user-profile';
import { UserDataListService } from './services/user-data-list.service';
import { ProfileComponent } from "./components/profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [UserProfileComponent, UserLocationComponent, SocialLinkComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-profile';
  selectedLink: SocialLink = {
    name: "",
    link: ""
  };
  users: UserProfile[] = []

  constructor (private userDataList: UserDataListService) {

  }

  ngOnInit() {
    this.users = this.userDataList.getLinks()
  }

  receiveData(data: SocialLink) {
    this.selectedLink = data; // Handle the received data
    console.log('Data received in A:', data);
  }

  onResetLink() {
    this.selectedLink = {
      name: "",
      link: ""
    }
  }
}
