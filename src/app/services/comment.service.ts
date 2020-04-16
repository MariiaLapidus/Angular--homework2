import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentModel} from '../models/CommentModel';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  API = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) { }
  getAllData(): Observable<CommentModel[]>{
    return this.httpClient.get<CommentModel[]>(this.API + 'comments');
  }

  getAllCommentsOfPosts(id): Observable<CommentModel[]>{
    return this.httpClient.get<CommentModel[]>(this.API + `comments?postId=${id}`);
  }
}
