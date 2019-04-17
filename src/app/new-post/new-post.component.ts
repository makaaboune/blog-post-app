import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Post } from '../post-list/post.model';
import { PostService } from '../services/post/post.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public postForm: FormGroup;
  constructor(
    public postService: PostService,
    public router: Router,
    public formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });

  }

  onSubmit() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content, 0, 0);
    this.postService.insertPost(newPost);
    this.router.navigate(['/posts']);
   }

}
