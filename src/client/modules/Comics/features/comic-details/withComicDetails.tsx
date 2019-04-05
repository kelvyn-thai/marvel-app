import * as React from 'react';
import ComicsPageHeader from '../header';
import ComicsPageFooter from '../footer';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './module/redux-connect';
import "./module/index.scss";
import { BeatLoader } from 'react-spinners';
import ErrorBoundary from 'Share/modules/error-boudary';

interface MatchParams {
    id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
    comic: any;
    fetchComicMarvel: (idComic: string) => ({ type: string, payload: any });
}

const enhance = WrappedComponent =>
    class extends React.Component<IProps, any>{
        componentDidMount() {
            this.props.fetchComicMarvel(this.props.match.params.id)
        }
        render() {
            const { status } = this.props.comic;
            let content;
            if (status === "fetched") {
                content = (
                    <ErrorBoundary>
                        <WrappedComponent {...this.props} />
                    </ErrorBoundary>
                )
            }
            else if (status === "fetching") {
                content = (
                    <div className="spinner">
                        <BeatLoader
                            sizeUnit={"px"}
                            size={15}
                            color={'rgb(54, 215, 183)'}
                            loading={true}
                        />
                    </div>
                )
            }
            return (
                <div className="wrap">
                    <ComicsPageHeader />
                    <div className="page-comic">
                        {content}
                    </div>
                    <ComicsPageFooter />
                </div>
            )
        }
    }

export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)