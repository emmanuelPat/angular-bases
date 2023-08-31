import { Character } from './../interfaces/character.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[]= [{
    name: 'Krilin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter( character: Character ): void {
    this.characters.push(character);
  }
}
