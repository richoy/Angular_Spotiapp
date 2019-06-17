import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    
   }

  getQuery( query:string ){

    const URL=`https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQABF6m7LkBkxeVwwvhWxw8nrE9o2b4mzBR5u9T3EJBHfJA5pMJ19BYGiXUS1QGXlcHlB1Q77JMdnp_3Taw'
    })

    return this.http.get(URL, { headers });
  }

  getNewReleases(){
  //  const headers = new HttpHeaders({ 
  //    'Authorization': 'Bearer BQApUULKDKJttW9jy_AfR47qJAyh5rDxSw4Bg0huYssD1Y9tpZeChYnjdGPNkkWTaTgeqMLyoA4sXg1oZ_4'
  //  })

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items));
    //this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //      .pipe( map( data => data['albums'].items));
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items));
    //this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
           
  }

  getArtista(id:string){
    return this.getQuery(`artists/${ id }`);
   // .pipe( map( data => data['artists'].items));
    //this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
           
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map( data => data['tracks']));
    //this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
           
  }

}
