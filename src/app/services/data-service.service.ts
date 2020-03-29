import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

	uri: string = `http://private-9aad-note10.apiary-mock.com/`;
	notes: BehaviorSubject<Note[]> = new BehaviorSubject(null);

    constructor(
      	private http: HttpClient,
    ) {
		this.getNotes();
	}

	getNotes() {
		this.http.get(this.uri + '/notes').subscribe((res: Note[]) => this.notes.next(res));
	}

	getNoteById(id: number) {
		this.http.get(this.uri + `/notes/${id}`).subscribe((res) => console.log(res));
	}

	addNotes(note: Note) {
		this.http.post(this.uri + '/notes', JSON.stringify(note)).subscribe((res) => console.log(res));
	}

	editNote(note: Note) {
		this.http.put(this.uri + `/notes/${note.id}`, JSON.stringify(note)).subscribe((res) => console.log(res));
	}

	deleteNote(note: Note) {
		this.http.delete(this.uri + `/notes/${note.id}`).subscribe((res) => console.log(res));
	}
}
