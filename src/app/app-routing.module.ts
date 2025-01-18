import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyusComponent } from './whyus/whyus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { MherentalsComponent } from './mherentals/mherentals.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'services', component: ServicecomponentComponent },
  {path:'mhe',component:MherentalsComponent},
  { path: 'aboutus', component: AboutusComponent },
  { path: 'whyus', component: WhyusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contactus', component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
