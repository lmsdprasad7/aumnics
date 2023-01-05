import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  register=new FormGroup({
    mail:new FormControl("john@gmail.com",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)])

   })
  tempPassword: any;
  
   get mail(){
    return this.register.get('mail')
   }

   upper = true;
  lower = true;
  num = true;
  char = true;
len=true;

isUppercase = false;
  public validPassword(password: any) {

    let tempPassword:any = $('#password').val();
    let Uppercase =  /[A-Z]+/.test(password.key);
    if (Uppercase && !this.isUppercase) {
      this.isUppercase = true;
      this.upper = false;
    }
    else{
      this.upper=true;
    }

    let Lowercase =  /[a-z]+/.test(password.key);
    if (Lowercase)
 {
      this.lower = false;
    }
    let Number =  /[0-9]+/.test(password.key);  
    if (Number) {
      this.num = false;
    }
    let Character =  /(?=.*[!@#$&*])/.test(password.key);
    if (Character) {
      this.char = false;
    }

    if(password.key.length <= 8){
      this.len=false;
    }
    for (let index = 0; index < tempPassword.length; index++) {
      const element = this.tempPassword[index];
      if(element!=this.lower){
        this.lower=true;
      }  
    }
  }
}
