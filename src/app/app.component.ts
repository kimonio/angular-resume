import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings/settings.service';
import {enableProdMode} from '@angular/core';

enableProdMode();

// Third party.
import * as moment from 'moment';
declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.initScript();
    this.settingsService.initParticles();
  }

  getCurrentYear() {
    return moment().format("YYYY");
  }

}
