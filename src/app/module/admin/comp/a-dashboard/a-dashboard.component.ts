import { Component } from '@angular/core';

@Component({
  selector: 'app-a-dashboard',
  standalone: false,
  templateUrl: './a-dashboard.component.html',
  styleUrl: './a-dashboard.component.css'
})
export class ADashboardComponent {
  allBusiness = [{name:'Hotel', link:'/hotel/hotel-list'}, {name:'Tailor', link:'/tailor/shop-detail'}, {name:'Classes', link:''}]
}
