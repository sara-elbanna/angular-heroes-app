import { IAppState } from "../states/app.state";
import { createSelector } from '@ngrx/store';
import { IHeroesState } from '../states/heroes.state';

const selectHeroes = (state:IAppState) => state.heroes;

export const selectHeroesList = createSelector(
    selectHeroes,
    (state:IHeroesState) => state.heroes
)

// export const selectSelectedHero = createSelector(
//     selectHeroes,
//     (state: IHeroesState) => state.selectedHero
// )