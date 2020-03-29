import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {


	constructor(
		public translate: TranslateService,
		private router: Router,
		private noteService: NoteService,
	) {
		this.router.events.subscribe(e => {
			if (e instanceof NavigationEnd) {
				const id = e.url.split('/');
				this.noteService.getNoteById(parseInt(id[2])).then(res => console.log('Promise works with val:', res));
			}
		});
	}

}
