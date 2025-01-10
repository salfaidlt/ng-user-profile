import { Injectable } from '@angular/core';
import UserProfile from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserDataListService {

  users: UserProfile[] = [
    {
      fullname: "User Name 1",
      image: "bmw-m3-1.jpg",
      location: "Koudougou - Burkina Faso",
      links: [
        { name: 'Github', link: 'https://github.com/salfaidlt' },
        { name: 'Twitter', link: 'https://twitter.com' },
        { name: 'Linkedin', link: 'https://linkedin.com' },
        { name: 'Snapchat', link: 'https://snapchat.com' }
      ]
    },
    {
      fullname: "User Name 2",
      image: "bmw-m3-2.jpg",
      location: "Bobo-Dioulasso - Burkina Faso",
      links: [
        { name: 'Github', link: 'https://github.com/salfaidlt' },
        { name: 'Twitter', link: 'https://twitter.com' },
        { name: 'Linkedin', link: 'https://linkedin.com' },
        { name: 'Snapchat', link: 'https://snapchat.com' }
      ]
    },
    {
      fullname: "User Name 3",
      image: "car.jpg",
      location: "Ouagadougou - Burkina Faso",
      links: [
        { name: 'Github', link: 'https://github.com/salfaidlt' },
        { name: 'Twitter', link: 'https://twitter.com' },
        { name: 'Linkedin', link: 'https://linkedin.com' },
        { name: 'Snapchat', link: 'https://snapchat.com' }
      ]
    },
    {
      fullname: "User Name 4",
      image: "bmw-m3-3.jpg",
      location: "Banfora - Burkina Faso",
      links: [
        { name: 'Github', link: 'https://github.com/salfaidlt' },
        { name: 'Twitter', link: 'https://twitter.com' },
        { name: 'Linkedin', link: 'https://linkedin.com' },
        { name: 'Snapchat', link: 'https://snapchat.com' }
      ]
    }
  ]
  constructor() { }

  getLinks(): UserProfile[] {
    return this.users
  }
}
