import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
   let options = {
      stringsElement: '#typed-strings',
      typeSpeed: 80,
      backSpeed: 0,
      loop: false,
      contentType: 'html',
      attr: null,
      showCursor: false
    }

    let typed = new Typed('#typed', options);
  }

}
