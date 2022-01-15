import React from 'react';
import { FaTrophy } from 'react-icons/fa';

function Header(props) {

    const headerStyle = {
        backgroundColor: props.bgColor,
        color: props.textColor,
    }

    return (
        <header style={headerStyle}>
            <div className='container'>
                <h2 align="center"><FaTrophy className='fa-xs' />&nbsp;&nbsp;&nbsp;{props.text}</h2>
                <p>{props.description}</p>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Rank-It",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
    description: "Increase your company loyalty with our feedback platform",
}

export default Header
