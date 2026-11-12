import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-a-shop-serv',
  standalone: false,
  templateUrl: './a-shop-serv.component.html',
  styleUrl: './a-shop-serv.component.css'
})
export class AShopServComponent {
  public fb = inject(FormBuilder);
  shopServ  = this.fb.group({
    name:   ['',[Validators.required]],
    status: [''],
  });

  shopServSubmit(){
    if(this.shopServ.valid){
      console.log(this.shopServ.value);
    }
  }
}
