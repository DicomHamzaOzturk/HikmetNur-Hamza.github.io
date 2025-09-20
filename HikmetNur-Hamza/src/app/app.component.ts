import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { VenueComponent } from './components/venue/venue.component';
import { DresscodeComponent } from './components/dresscode/dresscode.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroComponent, TimelineComponent, VenueComponent, DresscodeComponent, RsvpComponent, FooterComponent],
  template: `
    <hero-section></hero-section>
    <timeline-section></timeline-section>
    <venue-section></venue-section>
    <dresscode-section></dresscode-section>
    <rsvp-section></rsvp-section>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
