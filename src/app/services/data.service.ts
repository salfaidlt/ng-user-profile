import { Injectable } from '@angular/core';
import SocialLink from '../models/social-links';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  linkTab: SocialLink[] = [
    { name: 'Github', link: 'https://github.com/salfaidlt' },
    { name: 'Twitter', link: 'https://twitter.com' },
    { name: 'Linkedin', link: 'https://linkedin.com' },
    { name: 'Snapchat', link: 'https://snapchat.com' },
  ]
  constructor() { }

  getLinks(): SocialLink[] {
    return this.linkTab
  }
}
