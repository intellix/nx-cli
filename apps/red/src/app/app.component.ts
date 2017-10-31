import { Component, OnInit } from '@angular/core';

import { CoreService } from '@nx-cli/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'red';

  constructor(private coreService: CoreService) {}

  ngOnInit() {}
}
