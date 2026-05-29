import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wedding-rsvp',
  imports: [FormsModule, CommonModule],
  templateUrl: './wedding-rsvp.html',
  styleUrl: './wedding-rsvp.scss',
})
export class WeddingRsvpComponent {
  schedule = [
    {
      time: '3:30 PM',
      title: 'Ceremony',
      desc: 'Join us as we exchange vows in the garden pavilion.',
    },
    {
      time: '5:00 PM',
      title: 'Cocktail Hour',
      desc: 'Enjoy drinks, music, and appetizers with family and friends.',
    },
    {
      time: '7:00 PM',
      title: 'Reception',
      desc: 'Dinner, dancing, and celebration throughout the evening.',
    },
  ];

  rsvpData = {
    fullName: '',
    email: '',
    attendance: '',
    meal: 'Chicken',
    message: '',
  };

  submitRSVP() {
    alert('Thank you for your RSVP!');
    console.log(this.rsvpData);

    this.rsvpData = {
      fullName: '',
      email: '',
      attendance: '',
      meal: '',
      message: '',
    };
  }
}
