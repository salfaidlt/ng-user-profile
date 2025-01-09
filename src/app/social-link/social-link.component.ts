import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input() link:string = 'default';
  @Output() clickedLink = new EventEmitter<string>();

  getClickedLink() {
    this.clickedLink.emit(this.link);
  }
}
