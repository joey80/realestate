import React from 'react';
import { connect } from 'react-redux';
import { states } from '../Form/Helper';
import './Select.scss';
  
const mapDispatchToProps = dispatch => {
    return {
        saveValue: (name, value) => dispatch({type: 'SAVE_VALUE', stateName: name, stateValue: value})
    }
};

const Select = props => {
    return (
        <select
            defaultValue={"Select A State"}
            onChange={event => {props.saveValue('state', event.target.value)}}
        >
            <option value="Select A State" disabled="disabled">Select A State</option>
            {states.names.map(name => {
                return (
                    <option key={name} value={name}>{name}</option>
                );
            })}
        </select>
    );
};

export default connect(null, mapDispatchToProps)(Select);