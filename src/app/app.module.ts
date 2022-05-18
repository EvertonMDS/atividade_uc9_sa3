import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LojasComponent } from './pages/lojas/lojas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,   
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    JobsComponent,
    LojasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
