import { Component } from '@angular/core';
import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect-angular';

  buffers: any[] = [];

  constructor(private postsService:PostService) {}

  ngOnInit() {
    this.loadBufferedPosts(5);
  }

  loadBufferedPosts(size: number) {
    this.postsService.getBufferedPosts(size).subscribe({
      next: (data) => this.buffers = data,
      error: (error) => console.error(error)
    })
  }
}
