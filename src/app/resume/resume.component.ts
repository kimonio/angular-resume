import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

// Providers.
import {SettingsService} from '../settings/settings.service';

// Interface.
import {IContent, IResume} from '../settings/settings.interface';

declare const $;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  content: IContent;
  resumeContent: IResume;

  constructor(private settingsService: SettingsService,
              private route: ActivatedRoute) {
    this.settingsService.getContent().subscribe((content: IContent) => this.resumeContent = content.resume);
  }

  ngOnInit() {
    this.settingsService.initScript();
    this.route.params.subscribe(params => {
      const section = params['section'];
      console.log(section);
      if (section) {
        $('#boxscroll').getNiceScroll().resize();
        setTimeout(() => $('#boxscroll').getNiceScroll().doScrollPos(0, $(`#${section}`).position().top), 100);
      }
    });
  }

}
