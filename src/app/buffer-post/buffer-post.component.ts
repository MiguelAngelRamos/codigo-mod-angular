import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-buffer-post',
  templateUrl: './buffer-post.component.html',
  styleUrl: './buffer-post.component.css'
})
export class BufferPostComponent {
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
