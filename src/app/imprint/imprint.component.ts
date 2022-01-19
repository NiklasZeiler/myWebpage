import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  emailstring = "mailto:zeiler.niklas@outlook.de";

  constructor() { }

  ngOnInit(): void {
  }

}
