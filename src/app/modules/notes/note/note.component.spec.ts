import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteComponent } from './note.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

describe('NoteComponent', () => {
  	let component: NoteComponent;
	let fixture: ComponentFixture<NoteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NoteComponent ],
			providers: [],
			imports: [
				RouterTestingModule,
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
		fixture = TestBed.createComponent(NoteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
