import { comicsSelector } from "./reselect";
import { actionRequestFetchComicsMarvel } from "./actions";

export const mapStateToProps = state => ({
    comics:  comicsSelector(state)
})


export const mapDispatchToProps = {
    fetchComicsMarvel: actionRequestFetchComicsMarvel
}
