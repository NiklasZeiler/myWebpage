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
  // honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  // submitted: boolean = false;
  // isLoading: boolean = false;
  // responseMessage: string;


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
      this.http.post("https://niklas-zeiler.de/send_mail.php", this.form.value, { responseType: 'text' })
        .subscribe(
          {
            next: (result) => { console.log(result) },
            error: (error) => { console.error(error) },
            complete: () => { console.log("POST OBSERVABLE COMPLETE") }
          }
        );
      // alert('Thanks for the message! I`ll get back to you soon!');

    }

  }

}