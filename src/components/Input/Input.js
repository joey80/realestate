import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({ error, label, onBlur, onChange, type, value }) => (
  <input
    value={value}
    type={type}
    onChange={onChange}
    onBlur={onBlur}
    name={label}
    className={error ? 'input__field input__field--error' : 'input__field'}
  />
)

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string
}

export default Input
