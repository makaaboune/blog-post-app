// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './core/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Global Material Modules
import { MaterialModule } from './core/material.module';
// Components
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
// Services
import { PostService } from './services/post/post.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
