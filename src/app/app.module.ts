import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroSectionComponent } from './homepage/hero-section/hero-section.component';
import { FeatureSectionComponent } from './homepage/feature-section/feature-section.component';
import { ProductsComponent } from './homepage/products/products.component';
import { TestimonialsComponent } from './homepage/testimonials/testimonials.component';
import { SalesPitchComponent } from './homepage/sales-pitch/sales-pitch.component';
import { FooterComponent } from './footer/footer.component';
import { PalmTreePage1Component } from './palm-tree-page1/palm-tree-page1.component';
import { PalmTreePage2Component } from './palm-tree-page2/palm-tree-page2.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogEntryComponent } from './blog-page/blog-entry/blog-entry.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FAQComponent } from './faq/faq.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    ProductsComponent,
    TestimonialsComponent,
    SalesPitchComponent,
    FooterComponent,
    PalmTreePage1Component,
    PalmTreePage2Component,
    TeamPageComponent,
    CareerPageComponent,
    BlogPageComponent,
    BlogEntryComponent,
    PrivacyPolicyComponent,
    FAQComponent,
    SignInComponent,
    SignUpComponent,
    FourOhFourComponent,
    AboutPageComponent,
    ContactPageComponent,
  ],
  imports: [MatButtonModule, BrowserModule, AppRoutingModule, NgxBootstrapIconsModule.pick(allIcons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
