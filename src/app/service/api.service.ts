import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMovie(){
    return this.http.get<any>("https://api.themoviedb.org/3/search/movie?api_key=89d1187e5ab52dd35df89117758ed62d&query=a").pipe(map((res: any=[])=>{
      return [res]; 
    }));
  }
}
