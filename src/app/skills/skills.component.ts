import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { allDescriptions } from '../descriptions';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  allDescriptions: any = [];
  @ViewChild('skills') private subComponent: ElementRef<HTMLDivElement>
  descriptionElement: HTMLDivElement;


  constructor() { }

  ngOnInit(): void {
    allDescriptions.forEach((description) => {
      this.allDescriptions.push(Object.assign({}, description));
    });
  }

  ngAfterViewInit() {
    this.descriptionElement = this.subComponent.nativeElement;
  }

  showDescription(index: number) {
    this.descriptionElement.querySelectorAll('.description').item(index).classList.remove('d-none');
    this.descriptionElement.querySelectorAll('.headline-skills').item(index).classList.add('top');
    this.descriptionElement.querySelectorAll('.svg').item(index).setAttribute("style", "opacity: 1");
    this.descriptionElement.querySelectorAll('.skills').item(index).setAttribute("style", "opacity: 1");
    // this.descriptionElement.querySelectorAll('.svg-background').item(index).removeAttribute("hidden");
    this.descriptionElement.querySelectorAll('.svg-background').item(index).setAttribute("style", "opacity: 1");
  }

  hideDescription(index: number) {
    this.descriptionElement.querySelectorAll('.description').item(index).classList.add('d-none');
    this.descriptionElement.querySelectorAll('.headline-skills').item(index).classList.remove('top');
    this.descriptionElement.querySelectorAll('.svg').item(index).setAttribute("style", "opacity: .5");
    this.descriptionElement.querySelectorAll('.skills').item(index).setAttribute("style", "opacity: .5");
    // this.descriptionElement.querySelectorAll('.svg-background').item(index).getAttribute("hidden");
    this.descriptionElement.querySelectorAll('.svg-background').item(index).setAttribute("style", "opacity: 0");
  }




}


