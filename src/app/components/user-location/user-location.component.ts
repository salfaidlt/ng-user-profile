import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-location',
  imports: [],
  templateUrl: './user-location.component.html',
  styleUrl: './user-location.component.scss'
})
export class UserLocationComponent {
  @Input()
  userLocation!: string
}
