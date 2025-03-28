"use client";

import { useState } from 'react';
import './component.css';

export default function LikeCounter() {
    const [count, setCount] = useState(263);
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);
        setIsLiked(liked => !liked);
    };

    return (
        <div className='like-counter'>
            <p>Likes: ({count})</p>
            <button onClick={handleClick} className='like-button'>
                {isLiked ? 'Like Zurückziehen' : 'Like'}
            </button>
        </div>
    );
}