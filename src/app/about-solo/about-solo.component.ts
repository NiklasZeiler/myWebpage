import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-solo',
  templateUrl: './about-solo.component.html',
  styleUrls: ['./about-solo.component.scss']
})
export class AboutSoloComponent implements OnInit {

  images: any[] = ['profilbildsw.jpg', 'profilbild.jpg', 'profilbildfa.jpg'];
  currentImage = 0;
  showImage = true;

  constructor() { }

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    let showInterval = setInterval(() => {
      if(this.currentImage == this.images.length -1) {
        clearInterval(showInterval);
      }
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      });
    }, 20000);
  }
}
