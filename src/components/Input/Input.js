import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = props => (
  <input
    value={props.value}
    type={props.type}
    onChange={props.onChange}
    onBlur={props.onBlur}
    name={props.label}
    className={props.error ? 'input__field input__field--error' : 'input__field'}
  />
)

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string
}

export default Input
