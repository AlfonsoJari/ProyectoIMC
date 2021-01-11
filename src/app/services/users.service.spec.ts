import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from "../models/userapi";
import { catchError } from 'rxjs/operators';

describe('DataApiService', () => {



    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HttpClientModule]

    }));
    //var storageService: StorageService;


    xit('should return an Logged User', (done: DoneFn) => {
        // Arrange
        const service: UsersService = TestBed.get(UsersService);

        var mydata = new UserApi;
        mydata.username = "mayahaj";
        mydata.password = "123456";


        // Act
        service.loginUser(mydata).subscribe((user: any) => {
            console.log(user.tokenType);
            console.log(user.accessToken);
            expect(user.tokenType).toContain("Bearer");
            done();
        });


    });

    it('should return an Error Message Branch 1', () => {
        // Arrange
        const service: UsersService = TestBed.get(UsersService);
        let val: boolean = true;
        // Act
        try {
            service.MessageError("Error");
            val = true;
        } catch (error) {
            val = false;
        }
        expect(val).toBe(true);
    });

    xit('should return an Error Message Branch 2', () => {
        // Arrange
        const service: UsersService = TestBed.get(UsersService);
        let val: boolean = true;
        var mydata = new UserApi;
        mydata.username = "dasr";
        mydata.password = "123";
        // Act
        try {
            try {
                service.loginUser(mydata).subscribe((user: any) => {
                });
            } catch (error) {

            }
            val = true;
        } catch (error) {
            val = false;
        }
        expect(val).toBe(true);
    });

}); 