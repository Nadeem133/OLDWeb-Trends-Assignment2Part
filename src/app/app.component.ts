import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.title}} 
      {{ hero.name}} 
      aged {{ hero.age}}
      was cricket champion is a {{hero.status}} statement.
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes in my list!</p>
`
})

export class AppComponent {
  title = 'List of My Heroes';
  heroes = [
    new Hero(1, 'Muhammad Ali', 'Mr.', false, 78),
    new Hero(2, 'Ian Botham', 'Mr.', true, 62),
    new Hero(3, 'Don Bradman', 'Mr.', true, 92),
    new Hero(4, 'Angelina Julie', 'Ms.', false, 43)
  ];

  myHero = this.heroes[0];
}
