// src/app/pages/pokemon-list/pokemon-list.page.ts
import { Component, OnInit }    from '@angular/core';
import { CommonModule }          from '@angular/common';
import { IonicModule }           from '@ionic/angular';
import { RouterModule, Router }  from '@angular/router';
import { PokeapiService }        from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss']
})
export class PokemonListPage implements OnInit {
  pokemons: any[] = [];
  offset    = 0;
  limit     = 20;
  loading   = false;

  constructor(
    private api:    PokeapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(event?: any): void {
    if (this.loading) return;
    this.loading = true;
    this.api.getPokemons(this.offset, this.limit).subscribe(res => {
      this.pokemons.push(...res.results);
      this.offset  += this.limit;
      this.loading  = false;
      event?.target.complete();
    });
  }

  openDetail(p: any): void {
    this.router.navigate(['/pokemon-detail', p.name]);
  }

  /**
   * Recebe a URL do Pokémon (por ex. ".../pokemon/25/") e retorna apenas o ID ("25")
   */
  extractId(url: string): string {
    const parts = url.split('/').filter(segment => segment.length > 0);
    return parts[parts.length - 1];
  }
}
