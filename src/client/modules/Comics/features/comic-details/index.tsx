import * as React from 'react';
import withComicDetails from './withComicDetails';
import {convertToLocalDate} from '@share/utils/index'

class ComicDetails extends React.Component<any, any> {

    render() {
        const {
            title,
            description,
            thumbnail,
            creators,
            dates
        } = this.props.comic.data;
        const thumbnailUrl = `${thumbnail.path}.${thumbnail.extension}`;
        const published = dates.find(date => date.type ==="onsaleDate");
        return (
            <div className="page-comic-block">
                <div className="page-comic-block-details">
                    <div className="page-comic-block-details-thumbnail">
                        <img src={thumbnailUrl} alt={title} />
                    </div>
                    <div className="page-comic-block-details-description">
                        <h1>{title}</h1>
                        <ul className="creator">
                            <li>
                                <h5>Published:</h5>
                                <p>{convertToLocalDate(published.date)}</p>
                            </li>
                            {creators.items.map((creator, index) =>
                                <li key={index}>
                                    <h5>{creator.role}:</h5>
                                    <p>{creator.name}</p>
                                </li>
                            )}
                        </ul>
                        <p className="description">{description}</p>
                    </div>
                </div>
                <div className="page-comic-block-purchase">

                </div>
            </div>

        )
    }
}

export default withComicDetails(ComicDetails);