import * as React from 'react';
import "./module/index.scss";
import withHeader from './withHeader';
import SearchBox from 'Comics/features/search-box';
import SortBox from 'Comics/features/sort-box';

interface IProps {

}

class HomePageHeader extends React.Component<IProps, any>{
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
                            <a href="#">
                                <span className="logo"></span>
                            </a>
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

export default withHeader(HomePageHeader);