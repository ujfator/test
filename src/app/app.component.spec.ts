import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { async, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpLoaderFactory } from "./app.module";
import { MaterialModule } from './material.module';

const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_DE = require('../assets/i18n/de.json');

describe('AppComponent', () => {
	let translate: TranslateService;
	let http: HttpTestingController;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				MaterialModule,
				RouterTestingModule,
				HttpClientTestingModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [HttpClient]
					}
				})
			],
			providers: [
				TranslateService
			]
		}).compileComponents();
		translate = TestBed.get(TranslateService);
		http = TestBed.get(HttpTestingController);
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it('should load translations', async(() => {
		spyOn(translate, 'getBrowserLang').and.returnValue('en');
		const fixture = TestBed.createComponent(AppComponent);
		const compiled = fixture.debugElement.nativeElement;

		// the DOM should be empty for now since the translations haven't been rendered yet
		expect(compiled.querySelector('h2').textContent).toEqual('');

		http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
		http.expectNone('/assets/i18n/de.json');

		// expect app to get all Notes
		http.expectOne('http://private-9aad-note10.apiary-mock.com/notes');

		// Finally, assert that there are no outstanding requests.
		http.verify();

		fixture.detectChanges();
		// the content should be translated to english now
		expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_EN.NOTES);

		translate.use('de');
		http.expectOne('/assets/i18n/de.json').flush(TRANSLATIONS_DE);

		// Finally, assert that there are no outstanding requests.
		http.verify();

		// the content has not changed yet
		expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_EN.NOTES);

		fixture.detectChanges();
		// the content should be translated to german now
		expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_DE.NOTES);
	}));
});
