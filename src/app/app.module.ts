import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PapaComponent } from './papa/papa.component';
import { DirectivaPersonalizadaDirective } from './directiva-personalizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    PapaComponent,
    DirectivaPersonalizadaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
