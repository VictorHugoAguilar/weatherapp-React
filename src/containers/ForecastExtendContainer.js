import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended  from './../components/ForecastExtended';
import { connect } from 'react-redux';

class ForecastExtendContainer extends Component {
    render() {
        return (
            this.props.city &&
            <div>
                <ForecastExtended city={this.props.city} />
            </div>
        );
    }
}

ForecastExtendContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    city: state.city
});

export default connect(mapStateToProps, null)(ForecastExtendContainer);