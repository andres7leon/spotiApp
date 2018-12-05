import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  
  urls: any = {};

  constructor( private domSanitizer:DomSanitizer ){
    this.urls = { spotify: 'https://open.spotify.com/embed?uri=' };
  }

  transform( value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( this.urls[url] + value );
  }

}
