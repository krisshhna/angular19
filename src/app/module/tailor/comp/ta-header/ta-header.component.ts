import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ta-header',
  standalone: false,
  templateUrl: './ta-header.component.html',
  styleUrl: './ta-header.component.css'
})
export class TaHeaderComponent {
  constructor(public router:Router){}

  logout(){
    this.router.navigate(['login']);
  }
}
