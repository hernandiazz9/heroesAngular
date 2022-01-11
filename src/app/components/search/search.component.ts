import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "src/app/servicios/heroes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent implements OnInit {
  heroes: any = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private _heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (params) => (this.heroes = this._heroService.buscarHeroes(params["str"]))
    );
  }
}
