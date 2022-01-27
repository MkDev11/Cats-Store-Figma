import {
  ACTION_FETCH_TOGGLE,
  ACTION_FETCH_CARDS,
  ACTION_TOGGLE_FAVOURITE,
  ACTION_SORT_CARDS_PRICE_DECREASE,
  ACTION_SORT_CARDS_PRICE_INCREASE,
  ACTION_SORT_CARDS_AGE_DECREASE,
  ACTION_SORT_CARDS_AGE_INCREASE,
} from "../Redux/Actions/cardActions";

export interface CardStateTypes {
  cards: any[];
  sortButtons: any[];
  isFetching: boolean;
}

interface fetchToggle {
  type: typeof ACTION_FETCH_TOGGLE;
  payload: {
    value: boolean;
  };
}

interface fetchCards {
  type: typeof ACTION_FETCH_CARDS;
  payload: any[];
}

interface toggleIsFavourite {
  type: typeof ACTION_TOGGLE_FAVOURITE;
  payload: {
    id: number;
    status: boolean;
  };
}

interface toggleSortCardsPriceDecrease {
  type: typeof ACTION_SORT_CARDS_PRICE_DECREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsPriceIncrease {
  type: typeof ACTION_SORT_CARDS_PRICE_INCREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsAgeDecrease {
  type: typeof ACTION_SORT_CARDS_AGE_DECREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsAgeIncrease {
  type: typeof ACTION_SORT_CARDS_AGE_INCREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

export type cardActionTypes =
  | fetchToggle
  | fetchCards
  | toggleIsFavourite
  | toggleSortCardsPriceDecrease
  | toggleSortCardsPriceIncrease
  | toggleSortCardsAgeDecrease
  | toggleSortCardsAgeIncrease;
