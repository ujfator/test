import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note-service.service';
import { TranslateService } from '@ngx-translate/core';
import { NoteQuery } from 'src/app/state-management/note/note.query';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

	note: Note;
	editing: boolean = false;
	editedTitle: string;

	constructor(
		private noteService: NoteService,
		private noteQuery: NoteQuery,
		public translate: TranslateService,
	) {
		this.noteQuery.selectedNote.subscribe((note: Note) => this.note = note);
	}

	valueChange(e) {
		this.editedTitle = e;
	}

	editButtonTitle(note: Note) {
		return (note && note.editing) ? this.translate.instant('SAVE') : this.translate.instant('EDIT');
	}

	edit(note: Note) {
		if (note.editing) {
			this.noteService.editNote({...note, title: this.editedTitle})
		};
		note.editing = !note.editing;
	}

	delete(note: Note) {
		this.noteService.deleteNote(note);
	}

}
