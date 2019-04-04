import { createSelector } from 'reselect';

export const comicsSelector = createSelector(
    (state: any) => state.comics,
    comicsState => comicsState
)