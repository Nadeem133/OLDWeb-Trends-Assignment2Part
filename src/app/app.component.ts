import { Component } from '@angular/core';
import { Hero } from './hero';

/*This displays my favourite heroes list. An array of four heroes has been created and 
that is displayed. IN order to validate a statement about the hero, a true false is setup
which highlights the usage of boolean datatype. */

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.title}} {{ hero.name}} aged {{ hero.age}}
      was a CRICKET champion is a {{hero.status}} statement.
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes in my list!</p>
`
})

export class AppComponent {
  title = 'List of My Heroes';
  heroes = [
    new Hero(1, 'MUHAMMAD ALI', 'Mr.', false, 78),
    new Hero(2, 'IAN BOTHAM', 'Mr.', true, 62),
    new Hero(3, 'DON BRADMAN', 'Mr.', true, 92),
    new Hero(4, 'ANGELINA JULIE', 'Ms.', false, 43)
  ];

  myHero = this.heroes[0];
}
