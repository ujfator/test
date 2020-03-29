import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note.model';
import { BehaviorSubject } from 'rxjs';
import { NoteStore } from '../state-management/note/note.store';

@Injectable({
    providedIn: 'root'
})
export class NoteService {

	uri: string = `http://private-9aad-note10.apiary-mock.com/`;

    constructor(
		private http: HttpClient,
		private noteStore: NoteStore,
    ) {
	}

	getNotes() {
		this.http.get(this.uri + 'notes').subscribe((res: Note[]) => {
			const propAdded = res.reduce((acc, note) => {
				acc.push({...note, editing : false});
				return acc;
			}, []);
			this.noteStore.update({notes: propAdded});
		});
	}

	async getNoteById(id: number): Promise<Note> {
		return this.http.get(this.uri + `notes/${id}`).toPromise().then((res: Note) => {
			this.noteStore.update({selectedNote: res});
			return res;
		});
	}

	addNotes(note: Note) {
		this.http.post(this.uri + 'notes', JSON.stringify(note)).subscribe((res) => this.getNotes());
	}

	editNote(note: Note) {
		delete note.editing;
		this.http.put(this.uri + `notes/${note.id}`, JSON.stringify(note)).subscribe((res) => this.getNotes());
	}

	deleteNote(note: Note) {
		this.http.delete(this.uri + `notes/${note.id}`).subscribe((res) => this.getNotes());
	}
}
