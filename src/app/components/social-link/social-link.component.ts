import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import SocialLink from '../../models/social-links';

@Component({
  selector: 'app-social-link',
  imports: [LucideAngularModule],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input() socialLink: SocialLink | undefined;
  @Output() clickedLink = new EventEmitter<SocialLink>();

  getClickedLink() {
    this.clickedLink.emit(this.socialLink);

    setTimeout(() => {
      this.clickedLink.emit();
    }, 5000)
  }
}
