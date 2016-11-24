import { Component, Input } from '@angular/core';
import { Hero } from '../hero/hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/hero-detail/hero-detail.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
