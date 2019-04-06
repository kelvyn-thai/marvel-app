import { comicSelector } from "./reselect";
import { actionRequestFetchComicMarvel, actionFetchedComicMarvel} from "./actions";

export const mapStateToProps = state => ({
    comic:  comicSelector(state)
})


export const mapDispatchToProps = {
    fetchComicMarvel: actionRequestFetchComicMarvel,
    cacheComicMarvel: actionFetchedComicMarvel
}
