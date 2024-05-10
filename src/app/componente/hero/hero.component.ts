import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  activado:boolean = true;
  desactivado:boolean = false;

  heroes:string[] = [ "Thor", "Steve", "Tony" ];

}
