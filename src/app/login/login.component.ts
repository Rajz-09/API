import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _router:Router){

  }

  errMsg=''

  ngOnInit(){
    //localStorage.setItem('data','this is msg.'); //not needed just for demo.
  }

  loginForm:FormGroup = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl('')
  })

  login(){
    if(this.loginForm.value.Username=="asdf" && this.loginForm.value.Password=="qwer"){
      localStorage.setItem('user',JSON.stringify(this.loginForm.value))
      this._router.navigate(['/']);
    }
    else{
      this.errMsg = "Username  or Password is Invalid.";
    }
  }

}
