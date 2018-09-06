import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-weather-widget';
  city = 'Hyderabad';
  cities = ['Hyderabad', 'Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Ahmedabad'];
  alert: boolean = false;

  constructor(injector: Injector) {
  }

  notFound(name: string) {
    this.alert = true;
    this.city = "Hyderabad";
    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }
}
