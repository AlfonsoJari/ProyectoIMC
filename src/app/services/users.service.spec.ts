import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from "../models/userapi";
import { StorageService } from './storage.service';

describe('DataApiService', () => {



    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HttpClientModule]

    }));
    var storageService: StorageService;


    xit('should return an Logged User', () => {
        // Arrange
        const service: UsersService = TestBed.get(UsersService);
        

        var mydata = new UserApi;
        mydata.username = "mayahaj";
        mydata.password = "123456";

        // Act
        var cadena;
        service.loginUser(mydata).subscribe((user: any) => {

            console.log(user.tokenType);
            console.log(user.accessToken);
            cadena=JSON.stringify(user.tokenType).toString;
        });
        expect(cadena).toEqual("Bearer");
    });  

}); 