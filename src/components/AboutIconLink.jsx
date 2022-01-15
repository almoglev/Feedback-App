import {FaQuestion} from 'react-icons/fa';
import React from 'react';
import {Link} from 'react-router-dom';

function AboutIconLink() {
    return (
        <div className='about-link'>
            {/* when routing- use Link to, when browsing external link- use a href */}
            <Link to='/about'>
                <FaQuestion size={40}/>
            </Link>
        </div>
    )
}

export default AboutIconLink
