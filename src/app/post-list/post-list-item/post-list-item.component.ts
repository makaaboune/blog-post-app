import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;
  constructor() { }

  ngOnInit() {
  }

// Increment number of loveIts on button click
  onLoveIts(post) {
    post.loveIts++;
  }

// Increment number of DontLoveIts on button click
// It's optional ! you can just decrement number of loveIts
  onDontLoveIts(post) {
    post.dontLoveIts++;
  }

// Get number of DontLoveIts to display it in the badge
  getDontLoveIts() {
    return this.post.dontLoveIts;
  }

// Get number of loveIts to display it in the badge
  getLoveIts() {
    return this.post.loveIts;
  }

}
