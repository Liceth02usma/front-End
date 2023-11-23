import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  list(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.url_ms_cinema}/movies`);
  }

  create(newMovie: Movie) {
    delete newMovie.id
    return this.http.post(`${environment.url_ms_cinema}/movies`, newMovie);
  }
  update(newMovie: Movie) {
    return this.http.put(`${environment.url_ms_cinema}/movies/${newMovie.id}`, newMovie);
  }
  delete(id: number) {
    return this.http.delete(`${environment.url_ms_cinema}/movies/${id}`);
  }

  show(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.url_ms_cinema}/movies/`+id);
  }
}

