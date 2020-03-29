import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AddDialogComponent } from './modules/notes/note/add-dialog/add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotesComponent } from './modules/notes/notes.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NoteComponent } from './modules/notes/note/note.component';

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

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		AddDialogComponent,
		NotesComponent,
		NoteComponent,
	],
	imports: [
		...materialModules,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
        TranslateModule.forRoot({
			defaultLanguage: 'en',
            loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
        }),
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [AddDialogComponent],
})
export class AppModule { }
