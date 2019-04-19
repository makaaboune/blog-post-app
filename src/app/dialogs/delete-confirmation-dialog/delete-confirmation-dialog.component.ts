import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Post } from 'src/app/post-list/post.model';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteConfirmationDialogComponent implements OnInit {

  constructor(
    public postService: PostService,
    public deleteDialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) { }

  ngOnInit() {
  }

  onConfirmDelete() {
    this.postService.removePost(this.data);
    this.deleteDialogRef.close();
  }

}
