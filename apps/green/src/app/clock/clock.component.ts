import { Component, OnInit } from '@angular/core';

import { ClockComponent as CoreClockComponent } from '@nx-cli/shared';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent extends CoreClockComponent { }
