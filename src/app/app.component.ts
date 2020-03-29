import { Component, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './modules/notes/note/add-dialog/add-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Note } from './models/note.model';
import { akitaDevtools } from '@datorama/akita';
import { NoteQuery } from './state-management/note/note.query';
import { Language } from './models/language.model';
import { NoteService } from './services/note-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = this.translate.instant('TITLE');
	languages: Language[] = [
		{
			shortName: 'en',
			longName: 'English'
		},
		{
			shortName: 'de',
			longName: 'Deutsch'
		}
	];
	notes: Note[];

	constructor(
		public dialog: MatDialog,
		public translate: TranslateService,
		private noteQuery: NoteQuery,
		private noteService: NoteService,
		private ngZone: NgZone,
	) {
		akitaDevtools(this.ngZone); // this makes the store available
		translate.setDefaultLang('en');
		translate.use('en');
		this.noteService.getNotes();
		this.noteQuery.notes.subscribe((notes: Note[]) => this.notes = notes);
	}

	changeLanguage(language: string) {
		this.translate.use(language);
	}

	add() {
		const dialogRef = this.dialog.open(AddDialogComponent, { width: '250px'});
	}

}
