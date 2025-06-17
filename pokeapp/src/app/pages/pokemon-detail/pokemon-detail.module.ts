// src/app/pages/pokemon-detail/pokemon-detail.module.ts
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { IonicModule }   from '@ionic/angular';
import { RouterModule }  from '@angular/router';
import { PokemonDetailPage } from './pokemon-detail.page';

// pokemon-detail.module.ts
// pokemon-detail.module.ts
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetailPage,       // <-- importa o component standalone
    RouterModule.forChild([{ path: '', component: PokemonDetailPage }])
  ]
})
export class PokemonDetailPageModule {}
