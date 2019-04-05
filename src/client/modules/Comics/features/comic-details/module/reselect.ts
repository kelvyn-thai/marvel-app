import { createSelector } from 'reselect';

export const comicSelector = createSelector(
    (state: any) => state.comic,
    comicState => comicState
)