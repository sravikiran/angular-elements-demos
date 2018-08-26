import { Component } from '@angular/core';

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

  notFound(name: string){
    this.alert = true;
    this.city = "Hyderabad";
    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }
}
