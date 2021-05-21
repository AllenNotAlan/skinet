import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseTestComponent } from './showcase-test.component';

describe('ShowcaseTestComponent', () => {
  let component: ShowcaseTestComponent;
  let fixture: ComponentFixture<ShowcaseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
