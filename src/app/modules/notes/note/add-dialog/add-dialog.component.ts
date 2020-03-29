import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from '../../../../services/note-service.service';
import { Note } from '../../../../models/note.model';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

	form: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<AddDialogComponent>,
		private noteService: NoteService,
		public translate: TranslateService,
	) { }

	ngOnInit(): void {
		this.form = new FormGroup({
			title: new FormControl(),
		});
	}

	onSubmit(): void {
		if (this.form.valid) {
			const note: Note = { title: this.form.value.title }
			this.noteService.addNotes(note);
			this.dialogRef.close();
		}
	}
}
