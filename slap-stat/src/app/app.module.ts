import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponentComponent } from './components/login-component/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from  './material.module';
import {MatTableModule} from '@angular/material/table';
import { TeamComponentComponent } from './components/team-component/team-component.component';
import { GameComponent } from './components/game/game.component';
import { PlayerHomeComponent } from './components/player-home/player-home.component';
import { CoachHomeComponent } from './components/coach-home/coach-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponentComponent,
    TeamComponentComponent,
    GameComponent,
    PlayerHomeComponent,
    CoachHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'register-team', component: TeamComponentComponent },
      { path: 'game', component: GameComponent},
      { path: 'playerhome', component: PlayerHomeComponent},
      { path: 'coachhome', component: CoachHomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
