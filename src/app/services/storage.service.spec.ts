import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from "../models/userapi";

describe('StorageServiceApi', () => {



    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HttpClientModule,StorageService]

    }));

    xit('should return an saved token', (done: DoneFn) => {
        // Arrange
        const service: UsersService = TestBed.get(UsersService);
        let service2: StorageService = TestBed.get(StorageService);

        var mydata = new UserApi;
        mydata.username = "prueba2";
        mydata.password = "123456";

        // Act
        service.loginUser(mydata).subscribe((user: any) => {
            console.log(user.tokenType);
            console.log(user.accessToken);
            service2.setSession("token", user.tokenType)
            service2.setSession("token2", user.tokenType)
            expect(service2.getSession("token")+service2.getSession("token2")).toContain("Bearer");
            done();
        });
    });

    it('should return the api url', () => {
        // Arrange
        let service: StorageService = TestBed.get(StorageService);
        // Act
        expect(service.getApiUrl()).toEqual("https://polar-brushlands-49411.herokuapp.com");
    });

    it('should return null from de session storage', () => {
        // Arrange
        let service: StorageService = TestBed.get(StorageService);
        // Act
        service.sessionDeleteAll();
        expect(service.getSession("token")).toEqual(null);
    });

    it('should return null from de session storage deleted by id', () => {
        // Arrange
        let service: StorageService = TestBed.get(StorageService);
        // Act
        service.setSession("token", "12345")
        service.sessionDeleteByKey("token");
        expect(service.getSession("token")).toEqual(null);
    });

    it('should return null from de local storage', () => {
        // Arrange
        let service: StorageService = TestBed.get(StorageService);
        // Act
        service.localDeleteAll();
        expect(service.getLocal("token")).toEqual(null);
    });

    it('should return null from de local storage deleted by id', () => {
        // Arrange
        let service: StorageService = TestBed.get(StorageService);
        // Act
        service.setLocal("token", "12345")
        service.localDeleteByKey("token");
        expect(service.getLocal("token")).toEqual(null);
    });

});