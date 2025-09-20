import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'rsvp-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent {
  private fb = inject(FormBuilder);
  submitted = signal(false);

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['',[Validators.required]],
    email: ['', [Validators.email]],
    attendance: ['yes', Validators.required],
    guests: [0, [Validators.min(0), Validators.max(8)]],
    note: ['']
  });

  get f(){ return this.form.controls; }

  submit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    // TODO: send to backend
    console.log('RSVP payload', this.form.value);
    this.submitted.set(true);
    this.form.reset({ attendance: 'yes', guests: 0 });
  }
}
