import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDialogComponent } from './modules/notes/note/add-dialog/add-dialog.component';
import { NotesComponent } from './modules/notes/notes.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NoteComponent } from './modules/notes/note/note.component';
import { OVERLAY_PROVIDERS, OverlayModule } from '@angular/cdk/overlay';
import { MaterialModule } from './material.module';

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
		MaterialModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FlexLayoutModule,
		OverlayModule,
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
	providers: [OVERLAY_PROVIDERS],
	bootstrap: [AppComponent],
	entryComponents: [AddDialogComponent],
})
export class AppModule { }
