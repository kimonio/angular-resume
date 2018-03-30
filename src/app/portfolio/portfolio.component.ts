import {Component, HostListener, OnInit} from '@angular/core';
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.settingsService.initScript();
  }

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.initScript();
  }

}
