import {Component, OnInit} from '@angular/core';

// Providers.
import {SettingsService} from '../settings/settings.service';
import {IContent, IHome} from '../settings/settings.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: IContent;
  homeContent: IHome;

  constructor(private settingsService: SettingsService) {
    this.settingsService.getContent().subscribe((content: IContent) => this.homeContent = content.home);
  }

  ngOnInit() {
    this.settingsService.initScript();

  }
}
