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

  // contact = {
  //   name: (<HTMLInputElement>document.getElementById('name')).value,
  //   email: '',
  //   message: '',
  // };

  // post = {
  //   endPoint: 'http://www.niklas-zeiler/sendMail.php',

  //   body: (payload: any) => JSON.stringify(payload),

  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       responseType: 'text',
  //     },
  //   },
  // };

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required]);
  // honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;

  // constructor(private http: HttpClient) { }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }
  OnSubmit() {

    if (this.form.status == "VALID") {
      this.form.disable();
      let formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);
      this.http.post("http://niklas-zeiler.de/send_mail.php", formData).subscribe();
      alert('Thanks for the message! I`ll get back to you soon!');

    }
    this.form.reset();
  }
  // onSubmit(ngForm) {
  //   if(ngForm.submittes && ngForm.form.valid) {
  //     this.http
  //       .post(this.post.endPoint, this.post.body(this.contact))
  //       .subscribe({
  //         next: (response) => console.log(response),
  //         error: (error) => console.error(error),
  //         complete: () => console.info('sendpost complete'),          
  //       });
  //   }
  // }
}