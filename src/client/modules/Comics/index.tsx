import * as React from 'react';
import withComics from './withComics';
import ComicItem from './features/comic-item';
import { BeatLoader } from 'react-spinners';
import * as _ from 'lodash';

interface IProps {
    comics: any;
    fetchComicsMarvel: (payload: any) => ({type: string, payload: any})
}

class Comics extends React.Component<IProps, any>{
    // componentDidMount() {
    //     window.addEventListener("scroll", _.throttle(this.onScroll, 1000), false);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.onScroll, false);
    // }
    // onScroll = () => {
    //     const isTouchedEndPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    //     const { offset, limit, results, total } = this.props.comics.data;
    //     const isLoadedAllRecords = results.length === total;
    //     if (isTouchedEndPage && !isLoadedAllRecords) {
    //         const params = {
    //             limit,
    //             offset: offset + limit
    //         }
    //         this.props.fetchComicsMarvel(params);
    //     }
    // };
    render() {
        const { data, status } = this.props.comics;
        return (
            <div className="page-comics">
                {data.results.map(comicItem =>
                    <ComicItem
                        key={comicItem.id}
                        comic={comicItem}
                    />)
                }
                {status === "fetching" &&
                    <div className="spinner">
                        <BeatLoader
                            sizeUnit={"px"}
                            size={15}
                            color={'rgb(54, 215, 183)'}
                            loading={true}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default withComics(Comics);