import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [
	A11yModule,
	MatCardModule,
	MatIconModule,
	MatToolbarModule,
	MatButtonModule,
	MatInputModule,
	MatDialogModule,
	MatTooltipModule,
	MatSelectModule,
	MatSidenavModule,
	MatDividerModule,
	MatListModule,
]

@NgModule({
	exports: [
		...materialModules,
		FlexLayoutModule,
	],
	imports: [
		CommonModule,
		...materialModules,
		BrowserAnimationsModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule
	],
})
export class MaterialModule { }
