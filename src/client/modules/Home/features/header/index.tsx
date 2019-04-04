import * as React from 'react';
import "./module/index.scss";

class HomePageHeader extends React.Component<any, any>{
    render() {
        return (
            <div className="home-header">
                <div className="home-header-upper">
                    <ul className="menu">
                        <li><a href="#"></a></li>
                        <li><a href="#">Sign In</a></li>
                        <li>
                            <a href="#">
                                <span className="logo"></span>    
                            </a>
                        </li>
                        <li><a href="#">Master Card</a></li>
                        <li>
                            <a href="#">
                                
                            </a>
                        </li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
                <div className="home-header-lower">
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
            </div>
        )
    }
}

export default HomePageHeader;