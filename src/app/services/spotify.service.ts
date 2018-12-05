import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor( private http: HttpClient) { }
  
  getGenerateToken () {

    this.http.get('https://spotify-get-token.herokuapp.com/spotify/264d466687764c16b1b72de3e71aac12/6906c81d401e4f19a279803212a26306')
      .subscribe( (token : any ) => {
        console.log('token', token.access_token);
      });

  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGy3qsM_3abxRxXqRnTdkkhkn2ZSSZA-WSZdxfY01-oaugDgNjv20jmzuyTelmYYSeSQsRFTLsvJ1wPLE'
    });
    
    return this.http.get(url, { headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map ( data => data['albums'].items ));
  }


  getArtists( termino: string ){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
      .pipe( map ( data => data['artists'].items ));

  }

  getArtist( id: string ){
    
    return this.getQuery(`artists/${id}`)
      // .pipe( map ( data => data['artists'].items );

  }

  getTopTracks( id: string ){
    
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe( map ( data => data['tracks'] ) );

  }

}
