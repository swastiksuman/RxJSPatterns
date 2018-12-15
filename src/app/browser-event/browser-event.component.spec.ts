import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserEventComponent } from './browser-event.component';

describe('BrowserEventComponent', () => {
  let component: BrowserEventComponent;
  let fixture: ComponentFixture<BrowserEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
