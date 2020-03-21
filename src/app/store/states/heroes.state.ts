import { IHero } from 'src/app/models/heroes.interface';

export interface IHeroesState {
    heroes: IHero[],
    // selectedHero: IHero
}

export const initialHeroesState ={
    heroes: null,
    // selectedHero: null
}