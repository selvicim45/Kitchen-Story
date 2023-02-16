import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-create-new-food-item',
  templateUrl: './create-new-food-item.component.html',
  styleUrls: ['./create-new-food-item.component.scss']
})
export class CreateNewFoodItemComponent implements OnInit {
  //Create Object of class FoodItem
  newFoodItem:FoodItem = new FoodItem();
  constructor(private foodService:FoodItemService,private router:Router) { }

  ngOnInit(): void {
  }

  saveNewFoodItemInfo()
  {
    this.foodService.AddNewFoodItem(this.newFoodItem).subscribe(data=>{
    this.getAllFoodItemInfo();
    });
  }
    getAllFoodItemInfo()
    {
        this.router.navigate(['admin']);
    }
    showHomePageComponent()
  {
    this.router.navigate(['']);

  }
  showAdminComponent()
  {
    this.router.navigate(['admin']);
  }

  
  }



