import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CreateNewFoodItemComponent } from './create-new-food-item/create-new-food-item.component';
import { DisplayfooditemsComponent } from './displayfooditems/displayfooditems.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component';


const routes: Routes = [
  {path: '', component:HomepageComponent },
  {path:'admin',component:AdminComponent},
  {path:'allfood',component:DisplayfooditemsComponent},
  {path:'newfooditem',component:CreateNewFoodItemComponent},
  {path:'updatefooditem/:id',component:UpdateFoodItemComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'payment',component:PaymentComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'thankyou',component:ThankyouComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
