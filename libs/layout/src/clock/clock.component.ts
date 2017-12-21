import { Component } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  date = timer(1000, 1000).pipe(map(() => new Date()));
}
