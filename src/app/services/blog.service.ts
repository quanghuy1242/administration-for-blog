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

  getBlogs(): Observable<Blog[]> {
    return this.db.collection<Blog>('blogs', ref => ref.orderBy('day', 'desc')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Blog;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    )
  }
}
