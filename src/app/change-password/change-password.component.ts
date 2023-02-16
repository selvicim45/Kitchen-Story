import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
 id:number;
 admin:Admin = new Admin();
  constructor(private adminservice:AdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.id =this.route.snapshot.params['id'];
    //this.changepassword();
  }
 

  changepassword(){
    console.log("Id value is "+ this.admin.id);
    console.log("value is "+ this.admin);
    this.adminservice.changePasswordservicemethod(this.admin.id,this.admin).subscribe(data=>{
      
      alert("password Changed Succesfully");
      this.showLoginComponent();
      });
      
    }

    showLoginComponent()
    {

      this.router.navigate(['adminlogin']);
    }
     
    
  }

