import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SendMailDialogComponent } from '../send-mail-dialog/send-mail-dialog.component';

@Component({
  selector: 'app-contact-solo',
  templateUrl: './contact-solo.component.html',
  styleUrls: ['./contact-solo.component.scss']
})
export class ContactSoloComponent implements OnInit {

  emailstring = "mailto:zeiler.niklas@outlook.de";


  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required]);

  constructor(private formBuilder: FormBuilder, private http: HttpClient, public dialog: MatDialog) {
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

