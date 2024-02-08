import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './pages/index/index.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClientModule} from '@angular/common/http';
import { FormularisComponent } from './pages/formularis/formularis.component';
import { HeaderComponent } from './header/header.component';
import { PersonaService } from 'src/models/classes/persona/persona.service';
import { QuilometratgeComponent } from './pages/quilometratge/quilometratge.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FormularisComponent,
    HeaderComponent,
    QuilometratgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
