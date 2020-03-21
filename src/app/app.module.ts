import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { HeroesReducer } from './store/reducers/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './store/effects/heroes.effects'
import { appReducers } from './store/reducers/app.reducer';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({Heroes: HeroesReducer}),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([HeroesEffects])
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
