import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() items: any[] = [];

  constructor( private router: Router) { }

  ngOnInit() {
  }

  verArtista( item: string ) {

    let artistaId;

    if ( item['type'] === 'artist' ) {
      artistaId = item['id'];
    } else {
      artistaId = item['artists'][0].id;
    }
    
    this.router.navigate([ '/artist', artistaId ]);
    console.log('id artist', artistaId);
  }

}
