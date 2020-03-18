import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidenavListComponent } from './components/nav/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './components/nav/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MeetingsComponent } from './components/pages/meetings/meetings.component';
import { LinksComponent } from './components/pages/links/links.component';
import { FooterComponent } from './components/nav/footer/footer.component';

@NgModule({
  declarations: [
	AppComponent,
	SidenavListComponent,
	HeaderComponent,
	HomeComponent,
	MeetingsComponent,
	LinksComponent,
	FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	MaterialModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
