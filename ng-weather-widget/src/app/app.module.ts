import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent,
    WeatherWidgetComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(app) {
    const el = createCustomElement(WeatherWidgetComponent, { injector: this.injector });
    customElements.define('weather-widget', el);

    if ((environment as any).name !== 'elements') {
      app.bootstrap(AppComponent);
    }
  }

}
