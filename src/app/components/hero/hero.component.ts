import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "src/app/servicios/heroes.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styles: [],
})
export class HeroComponent {
  hero: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private _heroService: HeroService
  ) {
    this.activateRoute.params.subscribe(
      (params) => (this.hero = this._heroService.getHero(params["id"]))
    );
  }
}
