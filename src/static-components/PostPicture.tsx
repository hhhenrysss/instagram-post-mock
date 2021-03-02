import photo from '../resources/photo.jpg';
import React from 'react';

export function PostPicture() {
    return (
        <div style={{backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
    )
}