import * as React from 'react';
import withComics from './withComics';
import ComicItem from './features/comic-item';
import Pagination from "react-js-pagination";

interface IProps {
    comics: any;
    onPageChange: (page: number) => void;
    fetchComicsMarvel: (payload: any) => ({ type: string, payload: any });
}

const RenderComicsItem = (props: any) => props.comicsList.map(comicItem =>
        <ComicItem
            key={comicItem.id}
            comic={comicItem}
        />
)


class Comics extends React.Component<IProps, any>{
    render() {
        const {
            results,
            page,
            limit,
            totalRecords,
        } = this.props.comics.data;
        const {
            sortBy,
            keySearch,
            resultsWithKeySearch
        } = this.props.comics;
        return (
            <div className="page-comics-block">
                <div className="page-comics-block-sort">

                </div>
                <div className="page-comics-block-search">
                </div>
                <div className="page-comics-block-items">
                    {keySearch.trim() !== "" ?
                        <RenderComicsItem comicsList={resultsWithKeySearch} /> :
                        <RenderComicsItem comicsList={results} />
                    }
                </div>
                <div className="page-comics-block-pagination">
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={limit}
                        totalItemsCount={totalRecords}
                        pageRangeDisplayed={5}
                        onChange={(page) => this.props.onPageChange(page)}
                    />
                </div>
            </div>
        )
    }
}

export default withComics(Comics);