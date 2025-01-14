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
  @Output() socialLinkEmitter = new EventEmitter<SocialLink>();

  sendData() {
    this.socialLinkEmitter.emit(this.socialLink); // Emit data to parent (B)
  }
}
