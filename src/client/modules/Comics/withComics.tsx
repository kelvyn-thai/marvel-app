import * as React from 'react';
import { compose } from "recompose";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './module/redux-connect';
import { LIMIT_PER_PAGE } from './module/constants';
import ErrorBoundary from 'Share/modules/error-boudary';
import './module/index.scss';

interface IProps {
    comics: any;
    fetchComicsMarvel: (params: any) => ({ type: string, payload: any })
}


const enhance = WrappedComponent =>
    class extends React.Component<IProps, any>{
        componentDidMount() {
            const { offset } = this.props.comics.data;
            const params = {
                limit: LIMIT_PER_PAGE,
                offset: 0
            }
            this.props.fetchComicsMarvel(params);
        }
        render() {
            const { status } = this.props.comics;

            if (status === "fetched") {
                return (
                    <ErrorBoundary>
                        <WrappedComponent
                            {...this.props}
                        />
                    </ErrorBoundary>
                )
            }
            return <div className="page-comics"></div>;
        }
    }
export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)   