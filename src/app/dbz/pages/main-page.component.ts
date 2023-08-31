import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ){};

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character );
  }

  // public characters: Character[]= [{
  //   name: 'Krilin',
  //   power: 1000
  // },{
  //   name: 'Goku',
  //   power: 9500
  // },{
  //   name: 'Vegeta',
  //   power: 7500
  // }];

  // onNewCharacter( character: Character ): void {
  //   this.characters.push(character);
  // }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index,1);
  // }
}
