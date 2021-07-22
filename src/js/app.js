import "../sass/app.scss";
// import 'alpinejs';
// import { cookieSetting } from './cookieSetting';
// cookieSetting();
import { generalConfig, navbarReady, modalReady } from "./modules";
import { glideReady } from "./glide";
import { accordionReady } from "./accordion";
import { teamDetailsSteup } from "./team";

generalConfig();

navbarReady();
modalReady();
teamDetailsSteup();
glideReady();
accordionReady();
