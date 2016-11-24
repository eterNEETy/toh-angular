import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService){}

    ngOnInit(): void{
        this.heroService.getHeroesSlowly()
        .then(heroes=>this.heroes = heroes.slice(1,5));
    }
}
