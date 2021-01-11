import { Component, OnInit } from '@angular/core';
import { ResponseUser } from '../models/responseuser';
import { StorageService } from '../services/storage.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sessionbar',
  templateUrl: './sessionbar.component.html',
  styleUrls: ['./sessionbar.component.css']
})
export class SessionbarComponent implements OnInit {
  nombre;
  id;
  username;
  email;

  constructor(private usersService: UsersService,
    private storageService: StorageService) {

  }

  ngOnInit(): void {
    try {
      this.usersService.consultarUser(new ResponseUser).subscribe((data: any) => {
        this.storageService.setSession("nombre", data.name);
        this.storageService.setSession("id", data.id);
        this.storageService.setSession("username", data.username);
        this.storageService.setSession("email", data.email);
        console.log(sessionStorage.getItem("nombre"));
        console.log(sessionStorage.getItem("id"));
        console.log(sessionStorage.getItem("username"));
        console.log(sessionStorage.getItem("email"));
        try {
          this.nombre = 'Nombre: ' + sessionStorage.getItem("nombre").toString().slice(1, -1);
          this.id = sessionStorage.getItem("id").toString().slice(1, -1);
          this.username = 'Username: ' + sessionStorage.getItem("username").toString().slice(1, -1);
          this.email = 'Email: ' + sessionStorage.getItem("email").toString().slice(1, -1);
        } catch (error) {
          this.nombre = "";
          this.id = "";
          this.username = "";
          this.email = "";
        }
      });
    } catch (error) {
    }
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    location.href = window.location.href;
  }

}
