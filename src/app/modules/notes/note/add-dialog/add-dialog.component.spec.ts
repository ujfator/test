import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDialogComponent } from './add-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

describe('AddDialogComponent', () => {
	let component: AddDialogComponent;
	let fixture: ComponentFixture<AddDialogComponent>;

	const mockDialogRef = {
		close: jasmine.createSpy('close'),
		open: jasmine.createSpy('open'),
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AddDialogComponent ],
			providers: [
				{
					provide: MatDialogRef,
					useValue: mockDialogRef
				},
				TranslateService,
			],
			imports: [
				MaterialModule,
				HttpClientTestingModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [HttpClient]
					}
				})
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should open and close', () => {
		mockDialogRef.open(AddDialogComponent);
		expect(mockDialogRef.open).toBeTruthy();
		expect(mockDialogRef.close).toBeTruthy()
	})
});
