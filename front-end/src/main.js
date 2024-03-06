import { Router } from "./router";


import { NavbarComponent } from "./app/components/navbar/navbar.component";
customElements.define("my-navbar", NavbarComponent);


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
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/welcome.html",
  })
  .register("welcome", {
    component: WelcomeComponent,
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/welcome.html",
  })
  .register("game", {
    component: GameComponent,
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/game.html",
  })
  .register("score", {
    component: ScoreComponent,
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/score.html",
  });
