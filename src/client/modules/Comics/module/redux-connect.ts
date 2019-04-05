import { comicsSelector } from "./reselect";
import { actionRequestFetchComicsMarvel, actionSortComicsByField, actionSearchComicsByKey } from "./actions";

export const mapStateToProps = state => ({
    comics:  comicsSelector(state)
})


export const mapDispatchToProps = {
    fetchComicsMarvel: actionRequestFetchComicsMarvel,
    actionSortComics: actionSortComicsByField,
    actionSearchComics: actionSearchComicsByKey
}
