import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ResponseApi } from '../models/responseapi';
import { UserApi } from '../models/userapi';
import { ResponseUser } from '../models/responseuser';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NewUserApi } from '../models/newuserapi';
import { ResponseImc } from '../models/responseimc';

@Injectable({
  providedIn: 'root'
})

export class UsersService {



  // Define API
  // apiURL = 'https://kubeet-cfdi-api.appspot.com';
   //apiURL = 'http://localhost:8080';
  apiURL = 'https://polar-brushlands-49411.herokuapp.com';


  //apiURL = 'http://201.147.64.84:8083';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API post() method => Create employee
  loginUser(userApi): Observable<UserApi> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(userApi));
    return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.MessageError)
      )
  }

  signupUser(newUserApi) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(newUserApi));
    return this.http.post(this.apiURL + '/api/auth/signup', JSON.stringify(newUserApi), this.httpOptions);
  }

  consultarImc(ResponseImc): Observable<any> {
    if (sessionStorage.getItem("token") != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("token").toString().slice(1, -1)
        })
      }
    }
    return this.http.post(this.apiURL + '/searchimcs/'+sessionStorage.getItem("id").toString(), "", this.httpOptions);
  }

  consultarUser(responseUser): Observable<ResponseUser> {
    if (sessionStorage.getItem("token") != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("token").toString().slice(1, -1)
        })
      }
    }
    return this.http.post<ResponseUser>(this.apiURL + '/search/'+sessionStorage.getItem("username").toString().slice(1, -1), "", this.httpOptions)
    .pipe(
      retry(1)
    )
  }

  nuevoImc(imcApi): Observable<any> {
    if (sessionStorage.getItem("token") != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("token").toString().slice(1, -1)
        })
      }
    }
    return this.http.post(this.apiURL + '/imcs', JSON.stringify(imcApi), this.httpOptions)
    .pipe(
      retry(1)
    )
  }

  MessageError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      alert('USUARIO Y/O CONTRASEÑA INCORRECTOS');
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

}