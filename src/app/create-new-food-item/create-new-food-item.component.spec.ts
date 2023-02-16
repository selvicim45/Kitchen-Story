import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFoodItemComponent } from './create-new-food-item.component';

describe('CreateNewFoodItemComponent', () => {
  let component: CreateNewFoodItemComponent;
  let fixture: ComponentFixture<CreateNewFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewFoodItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
