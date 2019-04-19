import * as React from 'react';
import "./module/index.scss";
import SearchBox from '@comics/features/search-box';
import SortBox from '@comics/features/sort-box';
import ViewsBox from '@comics/features/views-box';

interface IProps {

}

class ComicsPageHeader extends React.Component<IProps, any>{
    render() {
        return (
            <div className="home-header">
                <div className="home-header-upper">
                    <ul className="category">
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">CHARACTER</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV SHOWS</a></li>
                        <li><a href="#">GAME</a></li>
                        <li><a href="#">MORE</a></li>
                    </ul>

                </div>
                <div className="home-header-lower">
                    <ul className="menu">
                        <li><a href="#"></a></li>
                        <li>
                            <SearchBox />
                        </li>
                        <li>
                            <ViewsBox />
                        </li>
                        <li>
                            <SortBox />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ComicsPageHeader;