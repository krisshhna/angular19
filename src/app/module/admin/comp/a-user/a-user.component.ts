import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    });

    submitUser(){
      console.log(this.userForm.value);
      console.log(this.userForm.valid);
    }
}