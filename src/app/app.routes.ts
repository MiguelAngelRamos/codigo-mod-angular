import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserPostComponent } from './user-post/user-post.component';
import { BufferPostComponent } from './buffer-post/buffer-post.component';

export const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: 'user-post', component: UserPostComponent },
  { path: 'buffer-post', component: BufferPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
