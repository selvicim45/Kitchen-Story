import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  foodCategory:String[]=['Fruits','Vegetables','Bread','Pasta'];
  selection:any='';
  checked:any='';
  foodinfo :FoodItem[];
  foodSelected:String[]=[];
  
  constructor(private foodservice:FoodItemService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  showAdminComponent()
  {
    this.router.navigate(['adminlogin']);
  }

  showFoodItemSelectedFromDropDown(event:any) 
    {   
    this.selection= event.target.value;
    console.log("Selection is",this.selection);
    this.foodservice.showFoodItensBasedOnDropDownSelectionService(event.target.value).subscribe(data => {this.foodinfo=data;});
     }
    saveSelected(event:any)
    {
      this.checked = event.target.value;
      
      console.log("The value selected in checkbox is ",this.checked);
      this.foodSelected.push(this.checked);
      console.log(this.foodSelected);
      
    }
     sender()
     {
      console.log("sending this to paymrny compinent", this.foodSelected);
      this.foodservice.setData(this.foodSelected);
      this.router.navigate(['confirmation']);
    }
     
    
  }
