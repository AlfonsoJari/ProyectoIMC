import { Component, OnInit } from '@angular/core';
import { ResponseUser } from '../models/responseuser';
import { UserApi } from '../models/userapi';
import { StorageService } from '../services/storage.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cadena="";
  result = '';
  username = '';
  password = '';

  constructor(
    private usersService: UsersService,
		private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  addition() {
    this.result = 'token here !!!';
    //myresult = addition(this.operator1, this.operator2);

    var mydata = new UserApi;

		if(this.username == "" || this.password == ""){

			alert('USUARIO Y CONTRASEÑA REQUERIDOS');

		}else{

    mydata.username = this.username;
    this.storageService.setSession("username", mydata.username);
		mydata.password = this.password;
		this.usersService.loginUser(mydata)
		 .subscribe((data: any) => {
			this.storageService.setSession("token", data.accessToken);		  
      this.result = data.accessToken;
      //alert(data.accessToken);
      this.cadena = window.location.href;
      //alert(this.cadena.slice(0,-5))
      //location.href = this.cadena.slice(0,-5);
      //alert(sessionStorage.getItem("url"))
      location.href = sessionStorage.getItem("url").toString().slice(1, -1);
		})
    }
    return "Bearer";
  }

}
