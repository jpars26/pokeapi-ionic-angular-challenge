// src/app/app.module.ts
import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { RouteReuseStrategy }     from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule }       from '@angular/common/http';      // ← importe aqui
import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule               // ← e adicione aqui
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
