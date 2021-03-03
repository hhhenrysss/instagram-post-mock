import React from 'react';
import {printTime} from './util';
import {IComment} from '../types/Comment';

function CommentPicture({url, author}: { url: string, author: string }) {
    return (
        <img
            style={{width: 32, height: 32, borderRadius: 1000, gridRow: 1, gridColumn: 1}}
            src={url}
            alt={`${author}'s profile`}
        />
    )
}

function CommentContent({content, author, isFullWidth}: { content: string, author: string, isFullWidth: boolean }) {
    // todo: add a transparent options button
    return (
        <p style={{gridRow: 1, gridColumn: isFullWidth ? '2/3' : 2, fontSize: '13px', margin: 0}}>
            <strong>{author} </strong>
            <span>{content}</span>
        </p>
    )
}

interface ICommentLikeButtonProps {
    isLiked: boolean,
    onLikeClicked: () => void,
}

function CommentLikeButton({isLiked, onLikeClicked}: ICommentLikeButtonProps) {
    return (
        <div style={{gridRow: 1, gridColumn: 3}}>
            {isLiked ? (
                <span className="material-icons" onClick={onLikeClicked}>favorite</span>
            ) : (
                <span className="material-icons" onClick={onLikeClicked}>favorite_border</span>
            )}
        </div>
    )
}

function CommentFunctionBar({likeCount, time, isTimeOnly}: { likeCount: number, time: number, isTimeOnly: boolean }) {
    if (isTimeOnly) {
        return (
            <div style={{fontSize: '12px', color: 'gray'}}>
                <strong style={{width: 50, display: 'inline-block'}}>{printTime(time)}</strong>
            </div>
        )
    }
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

interface ICommentProps {
    comment: IComment,
    isLiked: boolean,
    onLikeClicked: () => void,
    isCurrentUserPost: boolean,
}

export function Comment(props: ICommentProps) {
    const {comment, isLiked, onLikeClicked, isCurrentUserPost} = props;
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `35px 1fr 30px`,
                gridTemplateRows: `1fr 20px`,
                gridColumnGap: 5,
                gridRowGap: 5
            }}
        >
            <CommentPicture url={comment.user.pictureURL} author={comment.user.username}/>
            <CommentContent isFullWidth={isCurrentUserPost} content={comment.content} author={comment.user.username}/>
            {isCurrentUserPost && (
                <CommentLikeButton isLiked={isLiked} onLikeClicked={onLikeClicked}/>
            )}
            <CommentFunctionBar isTimeOnly={isCurrentUserPost} likeCount={comment.likeCount}
                                time={comment.timeSincePosted}/>
        </div>
    )
}