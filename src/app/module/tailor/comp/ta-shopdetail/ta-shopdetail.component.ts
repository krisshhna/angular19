import { Component, inject } from '@angular/core';
import { shopDetail } from '../../../../common/forms/formSchema';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ta-shopdetail',
  standalone: false,
  templateUrl: './ta-shopdetail.component.html',
  styleUrl: './ta-shopdetail.component.css'
})
export class TaShopdetailComponent {
  public fb = inject(FormBuilder);
  shopDetails = shopDetail(this.fb)
}
