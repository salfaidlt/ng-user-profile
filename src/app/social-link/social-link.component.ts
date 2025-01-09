import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-social-link',
  imports: [LucideAngularModule],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input() link: string = 'default';
  @Output() clickedLink = new EventEmitter<string>();

  getClickedLink() {
    this.clickedLink.emit(this.link);

    setTimeout(() => {
      this.clickedLink.emit("");
    }, 5000)
  }
}
