import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-login',
  standalone: false,
  templateUrl: './m-login.component.html',
  styleUrl: './m-login.component.css'
})
export class MLoginComponent {
  public fb = inject(FormBuilder);
  
  constructor(public router:Router){}

  loginForm = this.fb.group({
    userName:   ['',[Validators.required]],
    password:   ['',[Validators.required]]
  });

  loginSubmit(){
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.router.navigate(['/admin/dashboard']);
  }
}
