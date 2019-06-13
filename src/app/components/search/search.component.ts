import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "src/app/services/spotify.service";
import { HomeComponent } from "src/app/components/home/home.component";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar: any[] = [];  
  loading: boolean;

  constructor(private spotify:SpotifyService) {
  }



  buscarArtista( termino:string ){
    this.loading = true;
    this.spotify.getArtista(termino)
        .subscribe( (data:any)=> {
          this.buscar = data;
          this.loading = false;
          console.log(this.buscar);
          
        })
   

  }



  ngOnInit() {
  }

}
