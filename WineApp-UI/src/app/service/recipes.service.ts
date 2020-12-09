import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RecipesService {


  private url = 'https://api.spoonacular.com/recipes/random?apiKey=8a5d0270a7ee41f5b944b653620406bc';
  constructor(private http: HttpClient) { }



generateRandomRecipe(): Observable<any>{
  return this.http.get<any>(this.url);
}
}
