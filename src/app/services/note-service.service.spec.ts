import { TestBed } from '@angular/core/testing';

import { NoteService } from './note-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NoteService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [ HttpClientTestingModule ],
		providers: [NoteService],
	}));

	it('#getNoteById should return value from a promise', () => {
		const service: NoteService = TestBed.get(NoteService);
		service.getNoteById(1).then(value => {
			console.log(value);
			expect(value).toBe({
				id: 2,
				title: "Pick-up posters from post-office",
			});
		});
  	});;

	it('should be created', () => {
		const service: NoteService = TestBed.get(NoteService);
		expect(service).toBeTruthy();
	});
});
