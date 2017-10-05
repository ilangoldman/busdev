import { CardsPage } from './cards/cards';

export class Config {
    setUpType = 0;
    setUpNav = true;
    setUpMain = false;
    configNavType = 'InApp';
    configMainPage = CardsPage;
    i = 0;

    constructor() {
        this.i++;
        console.log("Criei" + this.i);        
    }

    setNavType(navType) {
        this.configNavType = navType;
        console.log(this.configNavType);
    }
}


