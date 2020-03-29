import { TestBed } from '@angular/core/testing';

import { NoteService } from './note-service.service';

describe('Data.ServiceService', () => {
	let service: NoteService;
	beforeEach(() => TestBed.configureTestingModule({}));

	it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
		service.getNoteById(1).then(value => {
			expect(value).toBe()
			done();
		});
  	});;

	it('should be created', () => {
		const service: NoteService = TestBed.get(NoteService);
		expect(service).toBeTruthy();
	});
});
