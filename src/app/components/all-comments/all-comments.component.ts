import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../../models/CommentModel';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
   comments: CommentModel[];
  private value: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
   // this.comments = this.activatedRoute.snapshot.data.list;
    console.log('list', this.activatedRoute.snapshot.data.list);
    this.activatedRoute.data.subscribe(value => {
      console.log(value)
      this.comments = value.list;
    });
  }

  ngOnInit(): void {
  }

}
