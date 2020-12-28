import React from 'react';
import './TextContainer.css';

const TextContainer = ({users}) => {

    // console.log("TextContainer", users);
    return (
        <div className="textContainer">
            <div>
                <h1>People currently chatting:</h1>
                <div className="activeContainer">
                    <h2>
                        {users.map((user, idx)=><div key={idx} className="activeItem">{user.name}</div>)}
                    </h2>
                </div>
            </div>
            
        </div>
        
    );

}

export default TextContainer;