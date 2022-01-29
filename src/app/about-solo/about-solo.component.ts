import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-solo',
  templateUrl: './about-solo.component.html',
  styleUrls: ['./about-solo.component.scss']
})
export class AboutSoloComponent implements OnInit {

  images: any[] = ['profilbildsw.jpg', 'profilbild.jpg', 'profilbildsp.jpg'];
  currentImage = 0;
  showImage = true;

  constructor() { }

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      });
    }, 8000);
  }
}
