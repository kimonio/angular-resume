import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.initScript();
  }

}
