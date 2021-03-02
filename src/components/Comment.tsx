import React from 'react';
import {printTime} from './util';

function CommentPicture({url, author}: {url: string, author: string}) {
    return (
        <img
            style={{width: 32, height: 32, borderRadius: 1000, gridRow: 1, gridColumn: 1}}
            src={url}
            alt={`${author}'s profile`}
        />
    )
}

function CommentContent({content, author}: {content: string, author: string}) {
    // todo: add a transparent options button
    return (
        <p style={{gridRow: 1, gridColumn: 2, fontSize: '13px', margin: 0}}>
            <strong>{author} </strong>
            <span>{content}</span>
        </p>
    )
}

function CommentLikeButton() {
    return (
        <div style={{gridRow: 1, gridColumn: 3}}><span className="material-icons">favorite_border</span></div>
    )
}

function CommentFunctionBar({likeCount, time}: {likeCount: number, time: number}) {
    return (
        <div style={{gridRow: 2, gridColumn: 2, fontSize: '12px', color: 'gray'}}>
            <strong style={{width: 50, display: 'inline-block'}}>{printTime(time)}</strong>
            {likeCount && (
                <strong style={{width: 50, display: 'inline-block'}}>{likeCount} like{likeCount > 1 && 's'}</strong>
            )}
            <strong style={{width: 50, display: 'inline-block'}}>Reply</strong>
        </div>
    )
}

export function Comment() {
    return (
        <div
            style={{display: 'grid', gridTemplateColumns: `35px 1fr 30px`, gridTemplateRows: `1fr 20px`, gridColumnGap: 5, gridRowGap: 5}}
        >
            <CommentPicture url={'profile_pics/1.jpg'} author={'temp'}/>
            <CommentContent content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum eget elit non euismod. Suspendisse a risus vestibulum, mollis lectus non, imperdiet diam. Aliquam eu ex laoreet nulla ornare cursus vitae viverra est.`} author={'temp'}/>
            <CommentLikeButton/>
            <CommentFunctionBar likeCount={1} time={100}/>
        </div>
    )
}