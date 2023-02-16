import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Admin } from './admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  id:number;
  username:any;
  password:any;
  admin:Admin = new Admin();
  
  private baseURL="http://localhost:8080/api/v2/admin"

  constructor(private httpClient:HttpClient,private route:Router) { }


  //Service to Update Admin Password by passing Id
  updateAdminPasswordService(id:number,admin):Observable<Object>
  {
         return this.httpClient.put(`${this.baseURL}/${id}`,admin);
  }

  //Service to Login
  adminLogin(admin: Admin):Observable<object>
  {
    console.log("user Name is ",admin) ;
    return this.httpClient.post(`${this.baseURL}`,admin);
  }

  changePasswordservicemethod(id:number,admin:Admin):Observable<object>
  {
    console.log("Id value from Service method "+ id);
    return this.httpClient.put(`${this.baseURL}/${id}`,admin);

  }
}
