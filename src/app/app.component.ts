import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tittle';

  capitalizar():void {
    this.title = this.title.charAt(0).toUpperCase()+
    this.title.slice(1).toLowerCase();
  }
}
