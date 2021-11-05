import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './lesson-2/registration-form/registration-form.component';
import { QuestionarieComponent } from './lesson-1/questionarie/questionarie.component';
import { UserInfoComponent } from './lesson-1/user-info/user-info.component';
import { QuestionComponent } from './lesson-1/question/question.component';
import { LoginFormComponent } from './lesson-2/login-form/login-form.component';
import { HomePageComponent } from './lesson-2/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './lesson-2/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    QuestionarieComponent,
    UserInfoComponent,
    QuestionComponent,
    LoginFormComponent,
    HomePageComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule,HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
