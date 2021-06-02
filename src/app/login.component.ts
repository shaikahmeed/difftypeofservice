import {Component} from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
    providers:[LoginService]
})

export class LoginComponent{
    username:string = "";
    password:string = "";
    msg:string  = "";

    // constructor(@Inject(LoginService) private _serv:LoginService){}
    constructor(private _serv:LoginService){}

    Login(txtUname){
        if(this._serv.VerifyLogin(this.username,this.password)==true){
            this.msg = "Successful Login";
        }
        else{
            this.msg = "Invalid Login";
            txtUname.focus();
        }
    }
}