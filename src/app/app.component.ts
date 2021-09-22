import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  faCoffee = faCoffee;
  submitted=false;
  contactForm = this.fb.group({
    contacts: this.fb.array([this.createContact()])
  });
  

  constructor(private fb: FormBuilder) {}

  get contacts() {
    return this.contactForm.get('contacts') as FormArray;
  }

  createContact(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }
  addContacts() {
    this.contacts.push(this.createContact());
  }
  

  deleteContact(i: number) {
    this.contacts.removeAt(i)
  }

  onSubmit() {
    this.submitted=true;
    console.log(this.contactForm.value);
  }
  
}



 
  

  

  
  


