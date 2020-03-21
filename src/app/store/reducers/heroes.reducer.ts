import { EheroesActions, HeroesActions } from '../actions.ts/heroes.actions';
import { initialHeroesState, IHeroesState } from '../states/heroes.state';

export const HeroesReducer = (
  state = initialHeroesState, 
  action: HeroesActions
): IHeroesState =>{
  switch (action.type) {
    case EheroesActions.GetHeroesSuccess:
      return {...state, heroes: action.payload};
    case EheroesActions.Add:
      return {...state, heroes:[...state.heroes, action.payload] };
    case EheroesActions.Remove:{
      return {
        ...state,
        heroes:[...state.heroes.filter(x=> x.id != action.payload)]
        
      };
    }
    case EheroesActions.Edit:{
      return {
        ...state,
        heroes:[...state.heroes.filter(x=> x.id != action.payload.id), action.payload]       
      };
    }
      

    default:
      return state;
  }
}