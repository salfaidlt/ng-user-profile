import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { UserLocationComponent } from "../user-location/user-location.component";
import { SocialLinkComponent } from "../social-link/social-link.component";
import UserProfile from '../../models/user-profile';
import SocialLink from '../../models/social-links';

@Component({
  selector: 'app-profile',
  imports: [UserProfileComponent, UserLocationComponent, SocialLinkComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  selectedLink: SocialLink = {
    name: "",
    link: ""
  }

  @Input() socialLink: SocialLink | undefined;

  @Input()
  userProfile!: UserProfile;

  @Output() passDataToRoot = new EventEmitter<SocialLink>();

  handleData(data: any) {
    this.passDataToRoot.emit(data); // Emit data to parent (A)
  }
}
