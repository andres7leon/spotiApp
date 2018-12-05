import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  newMusic: any[] = [];
  loading: boolean;
  error: boolean;
  msjError: string;

  constructor( private _spotify: SpotifyService ) {
    
    this.loading = true;
    this.error = false;
    this.msjError = '';

    this._spotify.getNewReleases()
      .subscribe ( (data: any ) => {
        this.newMusic = data;
        this.loading = false;
      }, ( errorService: any ) => {
        this.error = true;
        this.loading = false;
        this.msjError = errorService.error.error.message;
      });

  }

  ngOnInit() {
  }

}
