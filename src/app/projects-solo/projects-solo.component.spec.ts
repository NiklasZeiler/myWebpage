import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSoloComponent } from './projects-solo.component';

describe('ProjectsSoloComponent', () => {
  let component: ProjectsSoloComponent;
  let fixture: ComponentFixture<ProjectsSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
