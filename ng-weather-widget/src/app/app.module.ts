import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    WeatherWidgetComponent,
  ]
})
export class AppModule { 
  constructor(private injector: Injector) { }

  ngDoBootstrap(){
    const el = createCustomElement(WeatherWidgetComponent, { injector: this.injector });
    customElements.define('weather-widget', el);
  }
}
