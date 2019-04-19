import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Post } from '../../post-list/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Will be used to display no data icon
  public isNoData = false;
  // Database ref
  private database = firebase.database();
  // Array that contain all posts
  private posts: Array<Post> = [];
  // Post & Data subjects for subscriptions
  public postSubject = new Subject<Array<Post>>();
  public dataSubject = new Subject<boolean>();

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.getPosts();
  }


  public firstPost: Post = new Post(
    'Ut enim ad minim',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    5,
    2
    );

  public secondPost = new Post(
    'dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
    'laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem ipsum dolor.',
    15,
    22
    );
  public thirdPost = new Post(
    'sed do eiusmod tempor',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' +
    'do { eiusmod } tempor; incididunt ut labore et dolore; magna; aliqua.' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    0,
    0,
    );
  public anotherPost = new Post(
    'ut labore et dolore',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
    ' nisiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
      ' eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    6,
    3
    );

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  emitDataStatus() {
    this.dataSubject.next(this.isNoData);
  }

  getPosts() {
    // Read data Once
    this.database.ref('/posts').once('value').then((data) => {
      if (!data.exists()) {
        this.isNoData = true;
      }
      this.emitDataStatus();
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
  });
  }

  savePosts() {
    this.database.ref('/posts').set(this.posts);
  }

  insertPost(post: Post) {
    this.posts.push(post);
    // Uncomment this if you want to add same posts quickly
    // this.posts.push(this.firstPost, this.secondPost, this.thirdPost, this.anotherPost);
    this.savePosts();
    this.emitPosts();
    // Reset variable after adding new post
    this.isNoData = false;
    this.emitDataStatus();
  }

  removePost(post: Post) {
    const postIndex = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
      );
    // Remove post from array
    this.posts.splice(postIndex, 1);
    this.savePosts();
    // Show success message
    this.snackBar.open('Post deleted successfully', 'Close', {duration: 3000});
    this.emitPosts();
    // Set isNoData var to true when last post in the list is deleted
    if (this.posts.length === 0) {
      this.isNoData = true;
      this.emitDataStatus();
    }
  }

  lovePost(post, postIndex) {
    return new Promise((reject) => {
      this.database.ref()
      .child(`posts/${postIndex}`)
      .update({
        loveIts: ++post.loveIts
    }).then(() => {
      console.log('Post loved !');
    },
    (error) => {
      reject(error);
    });

    });
  }

  dontLovePost(post, postIndex) {
    return new Promise((reject) => {
          this.database.ref()
          .child(`posts/${postIndex}`)
          .update({
            dontLoveIts: ++post.dontLoveIts
        }).then(() => {
          console.log('Post dont loved !');
        },
        (error) => {
          reject(error);
        });

        });
      }

}

