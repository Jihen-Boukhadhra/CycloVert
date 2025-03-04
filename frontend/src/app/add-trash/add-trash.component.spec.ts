import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrashComponent } from './add-trash.component';

describe('AddTrashComponent', () => {
  let component: AddTrashComponent;
  let fixture: ComponentFixture<AddTrashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTrashComponent]
    });
    fixture = TestBed.createComponent(AddTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
