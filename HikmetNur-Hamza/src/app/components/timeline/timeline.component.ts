import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Item = { time: string; title: string; note?: string };

@Component({
  selector: 'timeline-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  items: Item[] = [
    { time: '19:00', title: 'Karşılama & Kokteyl' },
    { time: '20:00', title: 'Canlı Müzik Başlangıcı' },
    { time: '20:30', title: 'Gelin & Damat Girişi' },
    { time: '21:00', title: 'Nikâh Töreni' },
    { time: '21:30', title: 'Dans & Eğlence' }
  ];
}
