import * as React from 'react';
import { compose } from "recompose";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './module/index.scss';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

interface IProps { }


const enhance = WrappedComponent =>
    class extends React.Component<IProps, any>{
        render() {
            return <WrappedComponent
                {...this.props}
            />
        }
    }
export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)   