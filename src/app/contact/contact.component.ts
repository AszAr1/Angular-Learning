import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com'])

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  constructor() {}

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.contactForm.valid)
  }

  isUnvalidForm(formField: string): any {
    return this.contactForm.get(formField)?.invalid && (this.contactForm.get(formField)?.dirty || this.contactForm.get(formField)?.touched) 
  }
}
