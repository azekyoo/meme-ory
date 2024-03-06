import CARD_TEMPLATE from "./card.component.html";
import "./card.component.css";
import { Component } from "../../../scripts/component";

import back from "/src/app/components/game/card/assets/back.png";
import card0 from "/src/app/components/game/card/assets/card-0.png";
import card1 from "/src/app/components/game/card/assets/card-1.png";
import card2 from "/src/app/components/game/card/assets/card-2.png";
import card3 from "/src/app/components/game/card/assets/card-3.png";
import card4 from "/src/app/components/game/card/assets/card-4.png";
import card5 from "/src/app/components/game/card/assets/card-5.png";
import card6 from "/src/app/components/game/card/assets/card-6.png";
import card7 from "/src/app/components/game/card/assets/card-7.png";
import card8 from "/src/app/components/game/card/assets/card-8.png";
import card9 from "/src/app/components/game/card/assets/card-9.png";

let CARDS_IMAGE = [
  back,
  card0,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
];


export class CardComponent extends Component{
  constructor(id) {
    super(CARD_TEMPLATE)
    this._flipped = false;

    this.matched = false;

    this._elt = document.createElement("div");
    this._elt.innerHTML = this.template;
    this._elt = this._elt.firstElementChild;
    this._id = id;

    this._imageElt = this.getElement().querySelector(".card-wrapper");
    this._imageElt.querySelector("img.front-face").src =
      CARDS_IMAGE[this._id + 1];
    this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
  }

  getElement() {
    return this._elt;
  }

  flip() {
    this._flipped = !this._flipped;
    this._imageElt.classList.toggle("flip");
  }

  equals(card) {
    return card._id === this._id;
  }

  get flipped() {
    return this._flipped;
  }
  set flipped(flipped){
    this.flipped = flipped;
  }
}
