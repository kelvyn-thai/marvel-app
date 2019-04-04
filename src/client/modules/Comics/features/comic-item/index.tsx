import * as React from 'react';

interface IProps {
    comic: any
}

class ComicItem extends React.Component<IProps, any>{
    render() {
        const {
            resourceURI,
            title,
            thumbnail
        } = this.props.comic;
        const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
        return (
            <div className="comic-item">
                <div className="comic-item-image">
                    <a href={resourceURI} target="_blank">
                        <img src={imageSrc} alt={`image ${title}`} />
                    </a>
                </div>
                <div className="comic-item-text">
                    <h5>{title}</h5>
                </div>
            </div>
        )
    }
}


export default ComicItem;