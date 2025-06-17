import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable }    from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokeapiService {
  private base = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Listagem com paginação
  getPokemons(offset = 0, limit = 20): Observable<any> {
    return this.http.get(`${this.base}/pokemon?offset=${offset}&limit=${limit}`);
  }

  // Detalhes básicos do Pokémon
  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.base}/pokemon/${name}`);
  }

  // Dados de species (descrições, habitat etc)
  getSpecies(name: string): Observable<any> {
    return this.http.get(`${this.base}/pokemon-species/${name}`);
  }
}
