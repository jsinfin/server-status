import React from 'react'
import PropTypes from 'prop-types'

const ServerStatus = (props) => {

  const dot = {
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor,
    borderRadius: '50%',
    display: 'inline-block',
    border: props.border,
    borderColor: props.borderColor,
    borderStyle: 'solid'
  }

  return <span style={dot}/>

}

ServerStatus.defaultProps = {
  height: 10,
  width: 10,
  border: 0,
  borderColor: '#4c924c',
  borderStyle: 'none'
}

ServerStatus.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  border: PropTypes.number,
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string
}

export default ServerStatus
