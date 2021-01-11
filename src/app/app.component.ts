import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProyectoIMC';
  constructor(private usersService: UsersService,
    private storageService: StorageService) {
      storageService.setSession("url",window.location.href)
  }

  ngOnInit(): void {
  }

}
