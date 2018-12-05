import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  
  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
              private _spotify: SpotifyService
    ) {
    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  ngOnInit() {
  }
  
  getArtista( id: string ){
    this.loading = true;
    this._spotify.getArtist( id )
      .subscribe( ( data: any ) => {
        console.log('data artistaaa', data);
        this.artist = data;
        this.loading = false;
      });
  }

  getTopTracks( id: string) {

    this._spotify.getTopTracks( id )
      .subscribe( topTracks  => {
        console.log('topTracks track', topTracks);
        this.topTracks = topTracks;
      });

  }
}
