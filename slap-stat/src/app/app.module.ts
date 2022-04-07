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
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { CoachProfileComponent } from './components/coach-profile/coach-profile.component';
import { CoachAuthenticationService } from './services/coach-authentication.service';
import { PlayerAuthenticationService } from './services/player-authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponentComponent,
    TeamComponentComponent,
    GameComponent,
    PlayerHomeComponent,
    CoachHomeComponent,
    PlayerProfileComponent,
    CoachProfileComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'register-team', component: TeamComponentComponent },
      { path: 'game/:id/:teamname', component: GameComponent},
      { path: 'playerhome', component: PlayerHomeComponent},
      { path: 'coachhome', component: CoachHomeComponent},
      { path: 'playerprofile', component: PlayerProfileComponent},
      { path: 'coachprofile', component: CoachProfileComponent},
      { path: 'leaderboard/:id/:teamname', component: LeaderboardComponent}
    ]),
  ],
  providers: [PlayerAuthenticationService, CoachAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
