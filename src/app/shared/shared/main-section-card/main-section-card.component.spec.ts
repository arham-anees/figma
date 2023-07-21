import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionCardComponent } from './main-section-card.component';

describe('MainSectionCardComponent', () => {
  let component: MainSectionCardComponent;
  let fixture: ComponentFixture<MainSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
