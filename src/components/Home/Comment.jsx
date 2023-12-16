import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const Comment = ({ currentPosition, image, name, comment, idComment }) => {
    const [position, setPosition] = useState('');

    useEffect(() => {
        if (currentPosition > idComment) {
            setPosition('left');
        } else if (currentPosition < idComment) {
            setPosition('right');
        } else {
            setPosition('center');
        }
    }, [currentPosition, idComment]);

    return (
        <div className={`comment ${position}`}>
        <img src={image} className="author-image" alt={`${name} image`}/>
            <h4 className='author-name'>{name}</h4>
            <p className='author-comment'>
                {comment}
            </p>
        </div>
    );
};

Comment.propTypes = {
    currentPosition: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    idComment: PropTypes.number.isRequired
};
