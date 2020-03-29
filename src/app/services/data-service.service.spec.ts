import { TestBed } from '@angular/core/testing';

import { DataService } from './data-service.service';

describe('Data.ServiceService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: DataService = TestBed.get(DataService);
		expect(service).toBeTruthy();
	});
});
