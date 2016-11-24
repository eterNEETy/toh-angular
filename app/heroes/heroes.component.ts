import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/heroes/heroes.html',
  styleUrls: ['./app/heroes/heroes.css'],
})
export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}