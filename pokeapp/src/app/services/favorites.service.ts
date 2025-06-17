// src/app/services/favorites.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private key = 'poke_favs';
  private list: Set<string>;

  constructor() {
    const raw = localStorage.getItem(this.key);
    this.list = new Set(raw ? JSON.parse(raw) : []);
  }

  toggle(name: string) {
    this.list.has(name) ? this.list.delete(name) : this.list.add(name);
    localStorage.setItem(this.key, JSON.stringify([...this.list]));
  }

  isFav(name: string) {
    return this.list.has(name);
  }

  all() {
    return [...this.list];
  }
}
