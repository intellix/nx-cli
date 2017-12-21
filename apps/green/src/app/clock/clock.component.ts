import { Component, OnInit } from '@angular/core';

import { ClockComponent as CoreClockComponent } from '@nx-cli/layout';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent extends CoreClockComponent { }
