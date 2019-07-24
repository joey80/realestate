import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { states } from '../Form/Helper';
import './Select.scss';
  
const mapDispatchToProps = dispatch => ({
    saveValue: (name, value) => dispatch({ type: 'SAVE_VALUE', stateName: name, stateValue: value })
});

const Select = props => (
    <select
        defaultValue="Select A State"
        onChange={ e => { props.saveValue('state', e.target.value )}}>
        <option value="Select A State" disabled="disabled">Select A State</option>
        { states.names.map(name => (
            <option key={name} value={name}>{name}</option>
        )) }
    </select>
);

Select.propTypes = {
    saveValue: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Select);