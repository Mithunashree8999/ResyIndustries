import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AmcserviceComponent } from './amcservice/amcservice.component';
import { BookcardComponent } from './bookcard/bookcard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForkliftComponent } from './forklift/forklift.component';
import { GalleryComponent } from './gallery/gallery.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {MatDividerModule} from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomepageComponent } from './homepage/homepage.component';
import { IndustrialpackingComponent } from './industrialpacking/industrialpacking.component';
import { MherentalsComponent } from './mherentals/mherentals.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { SliderimageComponent } from './sliderimage/sliderimage.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ManpowerdialogComponent } from './manpowerdialog/manpowerdialog.component';
import { WarehousedialogComponent } from './warehousedialog/warehousedialog.component';
import { PackingdialogComponent } from './packingdialog/packingdialog.component';
import { AmcdialogComponent } from './amcdialog/amcdialog.component';
import { ForkliftdialogComponent } from './forkliftdialog/forkliftdialog.component';




@NgModule({
  declarations: [
    AboutusComponent,
    AmcserviceComponent,
    BookcardComponent,
    ContactusComponent,
    ForkliftComponent,
    GalleryComponent,
    HomepageComponent,
    IndustrialpackingComponent,
    MherentalsComponent,
    ServicecomponentComponent,
    SliderimageComponent,
    WarehouseComponent,
    WhyusComponent,
    AppComponent,
    ManpowerdialogComponent,
    WarehousedialogComponent,
    PackingdialogComponent,
    AmcdialogComponent,
    ForkliftdialogComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
