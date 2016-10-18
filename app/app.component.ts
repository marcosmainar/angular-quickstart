import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  moduleId : module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 
    showHeading = true;
    private HEROES: Hero[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
    heroes = this.HEROES;
    title = 'Tour of Heroes';
    selectedHero : Hero;
    hero : Hero = {
        id : 1,
        name: 'windstorm'
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    toggleHeading() {
        this.showHeading = !this.showHeading;
    }
}