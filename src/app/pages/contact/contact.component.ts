import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', this.contactForm);
      this.isSubmitted = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        this.isSubmitted = false;
        this.contactForm = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, 3000);
    }
  }
}
