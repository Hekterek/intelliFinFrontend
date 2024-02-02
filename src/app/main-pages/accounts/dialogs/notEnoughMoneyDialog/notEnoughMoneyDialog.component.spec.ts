/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotEnoughMoneyDialogComponent } from './notEnoughMoneyDialog.component';

describe('NotEnoughMoneyDialogComponent', () => {
  let component: NotEnoughMoneyDialogComponent;
  let fixture: ComponentFixture<NotEnoughMoneyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotEnoughMoneyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotEnoughMoneyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
