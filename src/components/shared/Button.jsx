import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    // props: children, version, type, isDisabled
    return (
        <button className={`btn btn-${props.version}`} type={props.type} disabled={props.isDisabled}>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes ={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button
