import React from 'react';

const Skill = ({ icon, color, name="xd", width="2rem", height="2.5rem" }) => {
    return (
        <div 
            className="skill"
        >
            <span 
                className='icon' 
                style={{ 
                    fill: color,
                    width: width,
                    height: height
                }}
                dangerouslySetInnerHTML={{ __html: icon }}
            ></span>
            <h1 className="name">{name}</h1>
        </div>
    )
}

export default Skill;