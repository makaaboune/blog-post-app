import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;
  @Input() postIndex = 0;
  constructor(
    public postService: PostService
  ) { }

  ngOnInit() {
  }

// Increment number of loveIts on button click
  onLoveIts(post, postIndex) {
    this.postService.lovePost(post, postIndex);
  }

// Increment number of DontLoveIts on button click
  onDontLoveIts(post, postIndex) {
    this.postService.dontLovePost(post, postIndex);
    }

// Get number of DontLoveIts to display it in the badge
  getDontLoveIts() {
    return this.post.dontLoveIts;
  }

// Get number of loveIts to display it in the badge
  getLoveIts() {
    return this.post.loveIts;
  }
// Delete selected post
  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
