import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';

const materialModules = [
	MatCardModule
]

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		...materialModules,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FlexLayoutModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
