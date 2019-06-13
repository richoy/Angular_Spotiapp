import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service');
    
   }

  getQuery( query:string ){

    const URL=`https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3ow8ltzZFslByBMm5S0Sc3Bmrycbq_iKFXa1gaLnWJzhRAflHHjp2jP_C3rQZvQbGgJZSEz4hOjJyaSc'
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

  getArtista(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items));
    //this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
           
  }

}
