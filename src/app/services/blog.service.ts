import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private readonly db: AngularFirestore
  ) { }

  /** GET all post */
  getBlogs(): Observable<Blog[]> {
    return this.db.collection<Blog>('blogs', ref => ref.orderBy('day', 'desc')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Blog;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    )
  }

  /** GET a post by id */
  getBlog(id: string): Observable<Blog> {
    return this.db.doc<Blog>('blogs/' + id).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data();
        const id = action.payload.id;
        return { id, ...data };
      })
    )
  }

  /** UPDATE a post */
  updatePost(id: string, post: any): Promise<void> {
    return this.db.doc<Blog>('blogs/' + id).update({
      title: post.title,
      content: post.content
    })
  }
}
