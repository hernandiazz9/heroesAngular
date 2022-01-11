import { Component, OnInit } from "@angular/core";
import { HeroService, Heroe } from "src/app/servicios/heroes.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroesServices: HeroService, private _router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
  }
  verHero(i: number) {
    this._router.navigate(["/hero", i]);
  }
}
