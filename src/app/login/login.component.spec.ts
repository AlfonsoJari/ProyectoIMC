import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserApi } from '../models/userapi';
import { StorageService } from '../services/storage.service';
import { UsersService } from '../services/users.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule],
      providers: [HttpClientModule, StorageService]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an logged User and save token', (done: DoneFn) => {
    // Arrange
    component.cadena = "";
    component.username = 'prueba1';
    component.password = '123456';

    // Act
    expect(component.addition()).toEqual("Bearer");
    done();

  });

});
