import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailstring = "mailto:zeiler.niklas@outlook.de";


  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required]);

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }
  OnSubmit() {
    console.log(this.form);
    if (this.form.status == "VALID") {
      this.form.disable();
      this.http.post("https://niklas-zeiler.de/sendMail.php", this.form.value)
        .subscribe(
          {
            next: (result) => { console.log(result) },
            error: (error) => { console.error(error) },
            complete: () => { console.log("POST OBSERVABLE COMPLETE") }
          }
        );
    }

  }

}