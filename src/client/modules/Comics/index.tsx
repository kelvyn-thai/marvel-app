import * as React from 'react';
import withComics from './withComics';
import ComicItem from './features/comic-item';
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';

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

const RenderComicsItemWithListViews = (props: any) => (
    <table className="table table-hover">
        <tbody>
            <tr>
                <td>
                    <h5>#</h5>
                </td>
                <td>
                    <h5>Title</h5>
                </td>
                <td>
                    <h5>Link</h5>
                </td>
                <td>
                    <h5>Image</h5>
                </td>
            </tr>
            {props.comicsList.map((comicItem) =>
                <tr key={comicItem.id}>
                    <td>{comicItem.id}</td>
                    <td>{comicItem.title}</td>
                    <td>
                        <Link to={`/comic/${comicItem.id}`}>
                            /comic/{comicItem.id}
                        </Link>
                    </td>
                    <td>
                        <img src={`${comicItem.thumbnail.path}.${comicItem.thumbnail.extension}`} alt="" />
                    </td>
                </tr>
            )}
        </tbody>
    </table>
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
            keySearch,
            viewsMethods,
            resultsWithKeySearch
        } = this.props.comics;
        let blockContentItems;
        if (viewsMethods === "list") {
            blockContentItems = (
                <div className="page-comics-block-items-list">
                    {keySearch.trim() !== "" ?
                        <RenderComicsItemWithListViews comicsList={resultsWithKeySearch} /> :
                        <RenderComicsItemWithListViews comicsList={results} />
                    }
                </div>
            )
        }
        else {
            blockContentItems = (
                <div className="page-comics-block-items">
                    {keySearch.trim() !== "" ?
                        <RenderComicsItem comicsList={resultsWithKeySearch} /> :
                        <RenderComicsItem comicsList={results} />
                    }
                </div>
            )
        }
        return (
            <div className="page-comics-block">
                {blockContentItems}
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