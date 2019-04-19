import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/services/post/post.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteConfirmationDialogComponent } from 'src/app/dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;
  @Input() postIndex = 0;
  constructor(
    public postService: PostService,
    public deleteConf: MatDialog
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
    this.deleteConf.open(DeleteConfirmationDialogComponent, {
      width: '430px',
      height: 'auto',
      panelClass: 'delete-confirmation',
      data: post
    });
    // this.postService.removePost(post);
  }
}
