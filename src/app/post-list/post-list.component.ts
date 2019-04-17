import { Component, OnInit, OnDestroy} from '@angular/core';
import { Post } from './post.model';
import { PostService } from '../services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  
  public postSubscription: Subscription;
  public dataStatusSubscription: Subscription;
  public posts: Array<Post> = [];
  public isNoData: boolean;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {

    this.postSubscription = this.postService.postSubject.subscribe((posts: Array<Post>) => {
      this.posts = posts;
    });
    this.postService.emitPosts();

    this.dataStatusSubscription = this.postService.dataSubject.subscribe((isNoData: boolean) => {
      this.isNoData = isNoData;
    });
    this.postService.emitDataStatus();

  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
    this.dataStatusSubscription.unsubscribe();
  }
}
