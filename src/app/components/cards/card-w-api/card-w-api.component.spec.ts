import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWApiComponent } from './card-w-api.component';

describe('CardWApiComponent', () => {
  let component: CardWApiComponent;
  let fixture: ComponentFixture<CardWApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
