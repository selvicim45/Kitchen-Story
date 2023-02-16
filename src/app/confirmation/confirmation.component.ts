import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  foodSelected:String[]=[];
  constructor(private foodservice:FoodItemService,private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData()
 {
   console.log("I am called");  
   this.foodSelected =this.foodservice.getData();
   console.log("List of food Selected in the get area,",this.foodSelected);
 }
 showPaymentPortal()
 {
  this.router.navigate(['payment']);
 }
 showHomePage()
 {
  this.router.navigate(['']);
 }

}
