import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'Comics/module/redux-connect';

interface IProps {
    comics: any;
    onSearchComics: (keySearch: string) => void;
}

class SearhBoxComics extends React.Component<any, any> {
    render() {
        const { keySearch } = this.props.comics;
        const onSearchComics = this.props.actionSearchComics;
        return (
            <React.Fragment>
                <label htmlFor="search-box">Search: </label>
                <input className="search-box" type="text" name="search-box" value={keySearch} onChange={(e) => onSearchComics(e.target.value)} placeholder="Type to find something..." />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearhBoxComics);


