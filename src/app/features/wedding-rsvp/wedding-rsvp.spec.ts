import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingRsvp } from './wedding-rsvp';

describe('WeddingRsvp', () => {
  let component: WeddingRsvp;
  let fixture: ComponentFixture<WeddingRsvp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingRsvp],
    }).compileComponents();

    fixture = TestBed.createComponent(WeddingRsvp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
