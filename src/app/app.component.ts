import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopingapp';
  property = "Mudassar"
  constructor()
  {

  }
  ClickMudassar()
  {
    this.property = "Sardar Mudassar Ali Khan";
  }
}
