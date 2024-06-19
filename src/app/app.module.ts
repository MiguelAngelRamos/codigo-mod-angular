import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routes";
import { PostService } from "./services/post.service";
import { UserPostComponent } from './user-post/user-post.component';
import { UserPostService } from "./services/user-post.service";
import { BufferPostComponent } from './buffer-post/buffer-post.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPostComponent,
    BufferPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, UserPostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
