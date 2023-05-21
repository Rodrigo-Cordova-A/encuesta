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
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { ResultadosComponent } from './preguntas/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    Comp1Component,
    Comp2Component,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
