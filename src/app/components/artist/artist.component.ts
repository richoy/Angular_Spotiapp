import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loadingArtista: boolean = true;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {

    console.log(this.loadingArtista);
        
    this.router.params.subscribe( params => {
      
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );


    } );

    this.loadingArtista = false;
    console.log(this.loadingArtista);
    }   

    getArtista ( id: string ){

      this.spotify.getArtista( id )
          .subscribe ( artista => {
            console.log(artista);
            this.artista = artista;
          })
    }

    
    getTopTracks( id: string ){

      this.spotify.getTopTracks( id )
          .subscribe ( topTracks => {
            this.topTracks = topTracks;
            console.log(this.topTracks);
            
          })
    }

    obtenerData( uri: string ){
      let data = uri.substr(14);
      return data;
    }
    
ngOnInit() {
};

}
