import * as React from 'react';
import './module/index.scss';
import Comics from 'Comics/index';
import HomePageHeader from './features/header';
import HomePageFooter from './features/footer';

export default class extends React.Component<any, any>{
    render() {
        return (
            <div className="wrap">
                <HomePageHeader />
                <Comics />
                <HomePageFooter />
            </div>
        )
    }
}