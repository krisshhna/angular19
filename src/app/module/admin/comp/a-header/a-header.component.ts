import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-header',
  standalone: false,
  templateUrl: './a-header.component.html',
  styleUrl: './a-header.component.css'
})
export class AHeaderComponent {
  constructor(public router:Router){}
  logout(){
    this.router.navigate(['/login']);
  }
}
