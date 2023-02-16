import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-displayfooditems',
  templateUrl: './displayfooditems.component.html',
  styleUrls: ['./displayfooditems.component.scss']
})

export class DisplayfooditemsComponent implements OnInit {
  
   foodinfo : FoodItem[];
  constructor(private foodService: FoodItemService,private router:Router) {} 

  ngOnInit(): void {
    this.getFoodInfo();
  }
  getFoodInfo()
  {
    this.foodService.ViewAllFoodItems().subscribe(data => {this.foodinfo=data;});
  } 


  deleteFoodItem(id:number)
  {
    let ch=confirm("Are u sure you want to delete?")
    if (ch==true)
    {
    this.foodService.deleteFoodItem(id).subscribe(data =>{
      this.getFoodInfo();
    });   
  }
  }

  showUpdateFoodItem(id:number)
  {
    this.router.navigate(['updatefooditem',id]);
  }
  }
 


