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

const materialModules = [
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
	imports: [
		...materialModules
	],
})
export class MaterialModule { }
