import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
 id:number;
 admin:Admin = new Admin();
  constructor(private adminService:AdminService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
  }

 
  
  updateAdminPassword()
  {
   return this.adminService.updateAdminPasswordService(this.id,this.admin).subscribe(data =>{
    this.updateAdminPassword();
   });
  }


   showAdminComponent(): void
   {
    this.router.navigate(['admin']);     
   }
   
   adminLogin()
   {
    this.adminService.adminLogin(this.admin).subscribe(data=>{
     console.log(this.admin);
     alert("Login Successful");
     this.showAdminComponent();
    },error=>alert("Invlaid username/password")); console.log("user Name is ",this.admin.username) ;
   }

   showChangePasswordComponent()
   {
     this.router.navigate(['changepassword']);
   }

  }


