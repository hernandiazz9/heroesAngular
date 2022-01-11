import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-hero-card",
  templateUrl: "./hero-card.component.html",
  styles: [],
})
export class HeroCardComponent implements OnInit {
  @Input() hero: any = {};
  @Input() i: number = 0;
  @Output() heroSelect: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroSelect = new EventEmitter();
  }

  verHero() {
    this.heroSelect.emit(this.i);
      // console.log(this.i);
      // this._router.navigate(["/hero", this.i]);
  }

  ngOnInit(): void {}
}
