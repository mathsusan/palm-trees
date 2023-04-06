import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogEntryComponent } from './blog-page/blog-entry/blog-entry.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FAQComponent } from './faq/faq.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PalmTreePage1Component } from './palm-tree-page1/palm-tree-page1.component';
import { PalmTreePage2Component } from './palm-tree-page2/palm-tree-page2.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'palm-trees-1', component: PalmTreePage1Component },
  { path: 'palm-trees-2', component: PalmTreePage2Component },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'career', component: CareerPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog-entry', component: BlogEntryComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
