import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItemService } from '../food-item.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private foodService: FoodItemService, private router: Router){ }

  ngOnInit(): void {
  }

  showHomePageComponent()
  {
    this.router.navigate(['']);

  }
  showAddNewItemComponent()
  {
    this.router.navigate(['newfooditem']);
  }
}
