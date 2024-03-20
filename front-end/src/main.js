import { Router } from "./router";


import { NavbarComponent } from "./app/components/navbar/navbar.component";
customElements.define("my-navbar", NavbarComponent);

import { FooterComponent } from "./app/components/footer/footer.component";
customElements.define("my-footer", FooterComponent);

import { WelcomeComponent } from "./app/components/welcome/welcome.component";
import { GameComponent } from "./app/components/game/game.component";
import { ScoreComponent } from "./app/components/score/score.component";



import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";


const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
router
  .register("", {
    component: WelcomeComponent,
  })
  .register("welcome", {
    component: WelcomeComponent,
  })
  .register("game", {
    component: GameComponent,
  })
  .register("score", {
    component: ScoreComponent,
  });
