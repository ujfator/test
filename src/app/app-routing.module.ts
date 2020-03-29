import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './modules/notes/notes.component';
import { NoteComponent } from './modules/notes/note/note.component';


const routes: Routes = [
	{
		path: 'notes',
		component: NotesComponent,
		children: [
			{
				component: NoteComponent,
				path: ':id',
			}
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
