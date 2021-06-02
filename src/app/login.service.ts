import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()

export class LoginService{
    users:User[] = [
        new User('dilip','dilip123'),
        new User('shaik','shaik123'),
        new User('cherry','cherry123'),
        new User('naresh','naresh123')
    ];
    
    VerifyLogin(username:string,password:string):boolean{
        var count:number=0;
        for(var i=0;i<this.users.length;i++){
            if(this.users[i].username == username &&this.users[i].password == password){
                count++;
            }
        }
        if(count == 1){
            return true;
        }
        else{
            return false;
        }
    }
}

