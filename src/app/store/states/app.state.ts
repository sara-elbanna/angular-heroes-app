import { initialHeroesState, IHeroesState } from './heroes.state'

export interface IAppState{
    heroes:IHeroesState;
}

export const initialAppState: IAppState ={
    heroes: initialHeroesState
}
export function getInitialState(): IAppState{
    return initialAppState
}