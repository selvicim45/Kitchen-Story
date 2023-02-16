import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 foodSelected:String[]=[];
 foodinfo:FoodItem;
  constructor(private foodservice:FoodItemService, private router:Router) { }

  ngOnInit(): void {
  }
 getData()
 {
   console.log("I am called");
   
   this.foodSelected =this.foodservice.getData();
   console.log("List of food Selected in the get area,",this.foodSelected);
 }
 showConfirmation()
 {
  this.foodSelected =this.foodservice.getData();
  this.router.navigate(['confirmation']);
 }

 showHomePage()
 {
  this.router.navigate(['']);
 }
 showThankyou()
 {
  this.router.navigate(['thankyou']);
 }
 


}
