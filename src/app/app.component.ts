import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public statistique1: Statistique;
  public statistique2: Statistique;
  constructor() {
    this.statistique1 = new Statistique('1', 'Test 1', '20', 'SUCCESS');
    this.statistique2 = new Statistique('2', 'Test 2', '10', 'SUCCESS');
  }

}
