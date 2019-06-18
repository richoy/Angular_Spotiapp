import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "src/app/services/spotify.service";
import { HomeComponent } from "src/app/components/home/home.component";
import { Subject } from "rxjs";


import { Observable, of } from 'rxjs';


import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar: any[] = [];  
  loading: boolean;

  busqueda: any[] = [];
  bar:boolean;

  private searchTerms = new Subject<string>();

  constructor(private spotify:SpotifyService) {
  }


  buscarArtista( termino:string ){
    this.loading = true;
    this.spotify.getArtistas(termino)
        .subscribe( (data:any)=> {
          this.buscar = data;
          this.loading = false;
          
        })
   

  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.bar = true;
    this.spotify.getArtistas(term)
        .subscribe( (data:any)=> {
          this.busqueda = data;
          this.loading = false;
          console.log(this.busqueda);  
        })
    
  }

  iniciar(){
    this.bar = !this.bar;
  }

  ngOnInit() {
  }

}
