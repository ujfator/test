import { Component } from '@angular/core';
import { DataService } from './services/data-service.service';
import { Note } from './models/note.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'test';

	constructor(
		private dataService: DataService,
	) {
		this.dataService.notes.subscribe((notes: Note[])=> console.log(notes));
	}
}
