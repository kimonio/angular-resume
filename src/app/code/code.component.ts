import {Component, HostListener, OnInit} from '@angular/core';
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

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
