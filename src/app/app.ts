import { Component, signal } from '@angular/core';
import { WeddingRsvpComponent } from "./features/wedding-rsvp/wedding-rsvp";

@Component({
  selector: 'app-root',
  imports: [WeddingRsvpComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fronda-rsvp');
}
