import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'Comics/module/redux-connect';

interface IProps {
    // comics: any;
    // onViewsComics: (sortBy: string) => void;
}

class SortBoxComics extends React.Component<any, any> {
    render() {
        const { viewsMethods } = this.props.comics;
        const onViewsComics = this.props.actionViewsComics;
        return (
            <select className="views-box" value={viewsMethods} onChange={(e) => onViewsComics(e.target.value)}>
                <option value="">Grid Views</option>
                <option value="list">List Views</option>
            </select>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBoxComics);


