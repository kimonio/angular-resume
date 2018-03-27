import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

// Providers.
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private settingsService: SettingsService,
              private router: Router) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === "/home") {

      }
    });
  }

  ngOnInit() {
    this.settingsService.initScript();
  }
}
