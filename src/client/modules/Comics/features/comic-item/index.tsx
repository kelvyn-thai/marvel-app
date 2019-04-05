import * as React from 'react';
import { Link, Switch } from 'react-router-dom';

interface IProps {
    comic: any
}

class ComicItem extends React.Component<IProps, any>{
    render() {
        const {
            id,
            resourceURI,
            title,
            thumbnail
        } = this.props.comic;
        const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
        return (
            <div className="comic-item">
                <div className="comic-item-image">
                    <Link to={`/comic/${id}`}>
                        <img src={imageSrc} alt={`image ${title}`} />
                    </Link>
                </div>
                <div className="comic-item-text">
                    <h5>{title}</h5>
                </div>
            </div>
        )
    }
}


export default ComicItem;