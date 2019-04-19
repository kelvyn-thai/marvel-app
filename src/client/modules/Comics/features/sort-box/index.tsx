import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '@comics/module/redux-connect';

interface IProps {
    comics: any;
    onSortComics: (sortBy: string) => void;
}

class SortBoxComics extends React.Component<any, any> {
    render() {
        const { sortBy } = this.props.comics;
        const onSortComics = this.props.actionSortComics;
        return (
            <select className="sort-box" value={sortBy} onChange={(e) => onSortComics(e.target.value)}>
                <option value="id">Sort by</option>
                <option value="title">Title</option>
            </select>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBoxComics);


