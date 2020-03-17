import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Output() sidenavToggle = new EventEmitter<void>();
	@Input() activeRoute = 'home';

	constructor(
	) {
	
	}

	onToggleSidenav() {
		this.sidenavToggle.emit();
	}
}