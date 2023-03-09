import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule  } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
