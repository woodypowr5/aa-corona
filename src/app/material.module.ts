import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatCardModule,
	MatSidenavModule,
	MatToolbarModule,
	MatListModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatSelectModule,
	MatInputModule,
	MatDialogModule,
	MatTabsModule
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatCardModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatInputModule,
		MatDialogModule,
		MatTabsModule
	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatInputModule,
		MatDialogModule,
		MatTabsModule
	]
})
export class MaterialModule {}
