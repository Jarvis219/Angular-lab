import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './screen/posts/post/post.component';
import { FormPostComponent } from './screen/posts/form-post/form-post.component';
import { UpdatePostComponent } from './screen/posts/update-post/update-post.component';

@NgModule({
  declarations: [AppComponent, PostComponent, FormPostComponent, UpdatePostComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
