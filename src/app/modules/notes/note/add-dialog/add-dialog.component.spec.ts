import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDialogComponent } from './add-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('AddDialogComponent', () => {
	let component: AddDialogComponent;
	let dialog: MatDialog;
	let fixture: ComponentFixture<AddDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AddDialogComponent ],
			providers: [{
				provide: MatDialog,
			}]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		dialog = TestBed.get(MatDialog);
		fixture = TestBed.createComponent(AddDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should open', () => {
		dialog.open(AddDialogComponent);
	})
});
