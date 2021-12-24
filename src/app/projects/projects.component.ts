import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { allProjects } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit ,AfterViewInit {
  allProjects: any = []; // Speichert die Daten von allProjects in einem Array
  @ViewChild('projects') private subComponent: ElementRef<HTMLElement> //ermöglicht den Zugriff auf eine untergeordnete Komponente hier projects
  projectsElement: HTMLElement; // der Variable werden die HTML Elemente zugewiesen

  constructor() { }

  ngOnInit(): void {
    allProjects.forEach((project) => {
      this.allProjects.push(Object.assign({}, project));
    });
  }

  ngAfterViewInit() {//wird einmalig nach der initalisierung ausgeführt 
    this.projectsElement = this.subComponent.nativeElement;
  }

  showCard(index: number) {
    this.projectsElement.querySelectorAll('.card').item(index).classList.remove('hide');
    this.projectsElement.querySelectorAll('#projectCard').item(index).classList.remove('filter');
  }

  hideCard(index: number) {
    this.projectsElement.querySelectorAll('.card').item(index).classList.add('hide');
    this.projectsElement.querySelectorAll('#projectCard').item(index).classList.add('filter');

  }

}
