import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';
import { IonicModule }       from '@ionic/angular';
import { RouterModule }      from '@angular/router';
import { PokemonListPage }   from './pokemon-list.page';

// pokemon-list.module.ts
// pokemon-list.module.ts
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonListPage,         // <-- importa o component standalone
    RouterModule.forChild([{ path: '', component: PokemonListPage }])
  ]
})
export class PokemonListPageModule {}
