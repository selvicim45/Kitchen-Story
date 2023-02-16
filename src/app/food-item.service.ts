import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FoodItem } from './food-item';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
 private baseURL="http://localhost:8080/api/v1/fooditems"
 private splbaseURL ="http://localhost:8080/api/v1/fooditems/selection";
 selection:any;
 foodSelected:String[]=[];
  constructor(private httpClient:HttpClient,private route:Router) { }

  ViewAllFoodItems():Observable<FoodItem[]>
  {
     return this.httpClient.get<FoodItem[]>(`${this.baseURL}`)
  }
  ShowAddNewItemComponent()
  {
    this.route.navigate(['create-new-food-item'])
  }
  //Service Method to invoke the Add new food item component
  AddNewFoodItem(fooditem:FoodItem):Observable<Object>{  
     return this.httpClient.post(`${this.baseURL}`,fooditem);
  }
 
  //Service Method to invoke the Delete the fooditem by passing Id
  deleteFoodItem(id:number):Observable<Object>
  {
         return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  //Service to Update the fooditem by passing Id
  updateFoodItem(id:number,fooditem:FoodItem):Observable<Object>
  {
         return this.httpClient.put(`${this.baseURL}/${id}`,fooditem);
  }

  showFoodItemBasedOnID(id:number):Observable<FoodItem>
  {
    return this.httpClient.get<FoodItem>(`${this.baseURL}/${id}`);
  }

  showFoodItensBasedOnDropDownSelectionService(selection:any):Observable<FoodItem[]>
  {
     console.log("Selection inside service method",selection);
     
     return this.httpClient.get<FoodItem[]>(`${this.splbaseURL}/${selection}`);
  }

 getData()
 {
  
   return this.foodSelected;
 }
 setData(data)
 {
    console.log("Inside service methos setData, ",data);
    this.foodSelected =data;
 }

  }

