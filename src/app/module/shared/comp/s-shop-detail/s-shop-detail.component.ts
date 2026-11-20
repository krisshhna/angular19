import { Component, inject, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s-shop-detail',
  standalone: false,
  templateUrl: './s-shop-detail.component.html',
  styleUrl: './s-shop-detail.component.css'
})
export class SShopDetailComponent implements OnChanges {
  @Input() shopForm!:FormGroup;
  public fb = inject(FormBuilder);

  ngOnChanges(){
    this.allService();
  }

  submitForm(){
    console.log(this.shopForm.value);
  }

  allService(){
    return this.allServ.push(this.fb.group({
      id:     [''],
      name:   ['',[Validators.required]],
      aRate:  ['',[Validators.required]],
      cRate:  ['',[Validators.required]],
      laRate: ['',[Validators.required]],
      lcRate: ['',[Validators.required]]
    }));
  }

  get allServ(){
    return this.shopForm.get('allServ') as FormArray;
  }

  removeItem(id:number){
    this.allServ.removeAt(id);
  }
}
