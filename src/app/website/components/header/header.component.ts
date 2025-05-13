import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
  menuOpen = false;
  currentSlide = 0; 

  slides = [
    { image: 'assets/images/img1.jpg', text: 'Lorem Ipsum' },
    { image: 'assets/images/img2.jpg', text: 'Lorem Ipsum' },
    { image: 'assets/images/img3.jpg', text: 'Lorem Ipsum' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 4000); //Change every 4 seconds
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  handleLinkClick() {
    this.menuOpen = false;
  }
}