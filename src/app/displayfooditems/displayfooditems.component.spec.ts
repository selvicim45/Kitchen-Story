import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfooditemsComponent } from './displayfooditems.component';

describe('DisplayfooditemsComponent', () => {
  let component: DisplayfooditemsComponent;
  let fixture: ComponentFixture<DisplayfooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfooditemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
