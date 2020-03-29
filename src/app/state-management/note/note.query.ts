import { Query } from '@datorama/akita';
import { NoteState, NoteStore } from './note.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoteQuery extends Query<NoteState> {

	notes = this.select('notes');
	selectedNote = this.select('selectedNote');

	constructor(protected store: NoteStore) {
		super(store);
	}
}
