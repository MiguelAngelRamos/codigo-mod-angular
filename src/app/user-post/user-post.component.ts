import { Component, OnInit } from '@angular/core';
import { UserPostService } from '../services/user-post.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent implements OnInit {

  userPosts: any[] = [];
  constructor(private userPostService: UserPostService){}

  ngOnInit(): void {
    this.userPostService.getUsersPosts().subscribe(data => {
      this.userPosts = data;
      console.log(this.userPosts);
    })
  }

}
