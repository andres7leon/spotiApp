import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  
  artists: any[] = [];
  loading: boolean;

  constructor( private _spotify: SpotifyService) {
    this.loading = false;
   }

  ngOnInit() {
  }

  buscar(termino: string){
    console.log('termino', termino);

    if ( termino !== '' ) {

      this.loading = true;
      this._spotify.getArtists( termino )
        .subscribe( (data: any) => {
          console.log('data art', data);
          this.artists = data;
          this.loading = false;
        });
    }
  }

}
