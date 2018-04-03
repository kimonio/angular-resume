import {Routes, Route} from '@angular/router';

// Components.
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';

const indexRoute: Route = {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
};

const fallbackRoute: Route = {
  path: '**',
  redirectTo: ''
};

export const routerConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'resume/:section',
    component: ResumeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  indexRoute,
  fallbackRoute
];
