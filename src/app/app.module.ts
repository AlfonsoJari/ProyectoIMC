import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { SignupComponent } from './signup/signup.component';
import { SessionbarComponent } from './sessionbar/sessionbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    LoginComponent,
    SignupComponent,
    SessionbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
