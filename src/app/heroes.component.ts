import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

import '../style/style.css';

@Component({
	selector: 'my-heroes',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroesComponent implements OnInit { 
	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.getHeroes();
	}

	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes = [];
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}
}