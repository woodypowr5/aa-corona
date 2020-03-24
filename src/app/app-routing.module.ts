import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MeetingsComponent } from './components/pages/meetings/meetings.component';
import { LinksComponent } from './components/pages/links/links.component';

const routes: Routes = [
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "meetings",
		component: MeetingsComponent
	},
	{
		path: "links",
		component: LinksComponent
	},
	{
		path: "**",
		component: HomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
