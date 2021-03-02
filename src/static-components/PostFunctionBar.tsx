import React from 'react';

export function PostFunctionBar() {
    return (
        <div style={{display: 'flex', justifyItems: 'center'}}>
            <span style={{display: 'block', width: 30}} className="material-icons-outlined">favorite_border</span>
            <span style={{display: 'block', width: 30}} className="material-icons-outlined">mode_comment</span>
            <span style={{display: 'block', width: 30}} className="material-icons-outlined">ios_share</span>
            <span style={{display: 'block', marginLeft: 'auto'}} className="material-icons-outlined">bookmark_border</span>
        </div>
    )
}