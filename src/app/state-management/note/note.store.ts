import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Note } from 'src/app/models/note.model';

export interface NoteState {
	   notes: Note[];
	   selectedNote: Note;
}

export function createInitialState(): NoteState {
	return {
		notes: [],
		selectedNote: null,
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Note' })
export class NoteStore extends Store<NoteState> {

	constructor() {
		super(createInitialState());
	}
}
