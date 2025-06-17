// src/app/services/pokeapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable }    from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokeapiService {
  private base = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(offset = 0, limit = 20): Observable<any> {
    return this.http.get(`${this.base}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.base}/pokemon/${name}`);
  }

  getSpecies(name: string): Observable<any> {
    return this.http.get(`${this.base}/pokemon-species/${name}`);
  }
}
