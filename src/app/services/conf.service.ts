import { Injectable } from '@angular/core';
import { Configuration } from '../models/conf.model';
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
export class ConfService {

  constructor(
    private readonly db: AngularFirestore
  ) { }

  /** GET conf about blog */
  getConf(): Observable<Configuration> {
    return this.db.doc<Configuration>('conf/eydJw8SpViKxaUe4VEdR').valueChanges();
  }

  updateConf(newConf: Configuration): Promise<void> {
    return this.db.doc<Configuration>('conf/eydJw8SpViKxaUe4VEdR').update({
      mainTitle: newConf.mainTitle,
      slogan: newConf.slogan,
      bio: newConf.bio,
      facebookUrl: newConf.facebookUrl,
      twitterUrl: newConf.twitterUrl,
      instagramUrl: newConf.instagramUrl,
      wordpressUrl: newConf.wordpressUrl,
      homeImageUrl: newConf.homeImageUrl,
      coverUrl: newConf.coverUrl,
      largeCover: newConf.largeCover
    });
  }
}
