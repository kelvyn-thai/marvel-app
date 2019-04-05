import * as React from 'react';
import { compose } from "recompose";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './module/redux-connect';
import ErrorBoundary from 'Share/modules/error-boudary';
import { BeatLoader } from 'react-spinners';
import './module/index.scss';

interface IProps {
    comics: any;
    fetchComicsMarvel: (params: any) => ({ type: string, payload: any })
    actionSortComics: (sortBy: string) => ({type: string, payload: string});
    actionSearchComics: (keySearch: string) => ({type: string, payload: string})
}


const enhance = WrappedComponent =>
    class extends React.Component<IProps, any>{
        componentDidMount() {
            const { limit, page } = this.props.comics.data;
            const params = {
                limit,
                page
            }
            this.props.fetchComicsMarvel(params);
        }

        onPageChange = (page) => {
            const { limit, totalPages } = this.props.comics.data;
            if (page >= 1 && page <= totalPages) {
                const params = {
                    limit,
                    page
                }
                this.props.fetchComicsMarvel(params);
            }
        }

        render() {
            const { status } = this.props.comics;
            let content;
            if (status === "fetched") {
                content = (
                    <ErrorBoundary>
                        <WrappedComponent
                            onPageChange={this.onPageChange}
                            onSortComics={this.props.actionSortComics}
                            onSearchComics={this.props.actionSearchComics}
                            {...this.props}
                        />
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
                <div className="page-comics">
                    {content}
                </div>
            );
        }
    }
export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)   