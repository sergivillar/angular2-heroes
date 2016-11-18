import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

import '../style/style.css';

@Component({
	selector: 'my-heroes',
	template: `
	<h2>My Heroes</h2>
	<ul class="heroes">
		<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
			<span class="badge">{{hero.id}}</span> {{hero.name}}
		</li>
	</ul>
	<my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`
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