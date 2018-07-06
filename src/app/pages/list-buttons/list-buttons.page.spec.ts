import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonsPage } from './list-buttons.page';

describe('ListButtonsPage', () => {
  let component: ListButtonsPage;
  let fixture: ComponentFixture<ListButtonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListButtonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
