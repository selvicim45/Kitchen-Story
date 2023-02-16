import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule}  from '@angular/common/http';

import { DisplayfooditemsComponent } from './displayfooditems/displayfooditems.component';
import { AdminComponent } from './admin/admin.component';
import { CreateNewFoodItemComponent } from './create-new-food-item/create-new-food-item.component';
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ThankyouComponent } from './thankyou/thankyou.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    DisplayfooditemsComponent,
    AdminComponent,
    CreateNewFoodItemComponent,
    UpdateFoodItemComponent,
    AdminLoginComponent,
    ChangePasswordComponent,
    PaymentComponent,
    ConfirmationComponent,
    ThankyouComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
