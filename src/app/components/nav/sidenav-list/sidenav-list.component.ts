import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
	@Output() closeSidenav = new EventEmitter<void>();
	@Input() activeRoute = 'home';

	constructor(
	) {
	
	}

	close() {
		this.closeSidenav.emit();
	}
}
