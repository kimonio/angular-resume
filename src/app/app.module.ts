import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// Components.
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

// Providers.
import {SettingsService} from './settings/settings.service';

// Routing configuration.
import {routerConfig} from './app.routing';
import {ResumeComponent} from './resume/resume.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
