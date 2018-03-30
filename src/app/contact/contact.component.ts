import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.initScript();
  }

}
