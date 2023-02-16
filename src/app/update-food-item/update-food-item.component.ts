import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.scss']
})
export class UpdateFoodItemComponent implements OnInit {
  //Declare variable and create object
  id:number;
  food:FoodItem = new FoodItem();
  //ActivatedRoute to catch parameters
  //Router to navigate
  constructor(private foodService: FoodItemService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.getFoodItemDetails();
  }

  getFoodItemDetails()
  {
    this.foodService.showFoodItemBasedOnID(this.id).subscribe(data =>{
    this.food = data;
      
   });
   
  }
  showAdminComponent()
  {
    this.router.navigate(['admin']);
  }
  showHomePageComponent()
  {
    this.router.navigate(['']);

  }

  updateFoodItemInDatabase()
  {  
      this.foodService.updateFoodItem(this.id,this.food).subscribe(data=>{
      this.showAdminComponent();
      });
  }

}
