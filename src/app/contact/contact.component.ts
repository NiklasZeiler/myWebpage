import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { SendMailDialogComponent } from '../send-mail-dialog/send-mail-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailstring = "mailto:zeiler.niklas@outlook.de";


  form: UntypedFormGroup;
  name: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  email: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.email]);
  message: UntypedFormControl = new UntypedFormControl("", [Validators.required]);

  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient, public dialog: MatDialog) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }
  ngOnInit(): void { }


  /**
    * Send the mail and reset form
    */
  OnSubmit() {
    console.log(this.form);
    if (this.form.status == "VALID") {
      this.http.post("https://niklas-zeiler.de/sendMail.php", this.form.value, { responseType: 'text' })
        .subscribe(
          {
            next: (result) => { console.log(result) },
            error: (error) => { console.error(error) },
            complete: () => { console.log("POST OBSERVABLE COMPLETE") }
          }
        );
    }
    this.form.reset();
  }

  /**
   * Open dialog mail is sent
   */
  openDialog() {
    this.dialog.open(SendMailDialogComponent);
  }
}
