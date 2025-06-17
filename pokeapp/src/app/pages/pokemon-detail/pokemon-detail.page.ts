import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';
import { IonicModule }       from '@ionic/angular';
import { RouterModule }      from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { PokeapiService }    from '../../services/pokeapi.service';
import { FavoritesService }  from '../../services/favorites.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,               // marca como standalone
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule                // para back-button e links
  ],
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss']
})
export class PokemonDetailPage implements OnInit {
  pokemon: any;
  species: any;
  flavorTexts: string[] = [];
  pictures: string[]   = [];

  constructor(
    private route: ActivatedRoute,
    private api:   PokeapiService,
    private fav:   FavoritesService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (!name) return;

    this.api.getPokemon(name).subscribe((p: any) => {
      this.pokemon  = p;
      this.pictures = Object.values(p.sprites)
        .filter((v): v is string => typeof v === 'string');
    });

    this.api.getSpecies(name).subscribe((s: any) => {
      this.species    = s;
      this.flavorTexts = s.flavor_text_entries
        .filter((e: any) => e.language.name === 'en')
        .slice(0, 6)
        .map((e: any) => e.flavor_text);
    });
  }

  toggleFavorite(): void {
    if (!this.pokemon) return;
    this.fav.toggle(this.pokemon.name);
  }

  isFavorite(): boolean {
    return this.pokemon ? this.fav.isFav(this.pokemon.name) : false;
  }
}
