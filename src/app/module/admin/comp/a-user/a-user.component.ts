import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-a-user',
  standalone: false,
  templateUrl: './a-user.component.html',
  styleUrl: './a-user.component.css'
})
export class AUserComponent {
    public fb = inject(FormBuilder);
    userForm  = this.fb.group({
      type:     ['tailor'],
      name:     ['',[Validators.required]],
      email:    ['',[Validators.required]],
      phone:    ['',[Validators.required]],
      password: [''],
      adharCard:['',[Validators.required]],
      panCard:  ['',[Validators.required]],
      address:  this.fb.array([])
    });

    ngOnInit(){
      this.addAddress();
    }

    addAddress(){
      this.address.push(this.fb.group({
          street:   ['',[Validators.required]],
          state:    ['',[Validators.required]],
          location: ['',[Validators.required]],
          city:     ['',[Validators.required]],
          pincode:  ['',[Validators.required]]
      }))
    }

    get address(){
      return this.userForm.get('address') as FormArray; 
    }

    removeAdd(id:number){
      this.address.removeAt(id);
    }

    submitUser(){
      console.log(this.userForm.value);
      console.log(this.userForm.valid);
    }
}