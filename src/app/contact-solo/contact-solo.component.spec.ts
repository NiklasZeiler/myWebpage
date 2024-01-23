import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { MatLegacyDialog as MatDialog, MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { RouterModule } from '@angular/router';

import { ContactSoloComponent } from './contact-solo.component';

describe('ContactSoloComponent', () => {
  let component: ContactSoloComponent;
  let fixture: ComponentFixture<ContactSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogModule],
      declarations: [ContactSoloComponent],
      providers: [UntypedFormBuilder, HttpClient, HttpHandler, MatDialogModule, Overlay]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
