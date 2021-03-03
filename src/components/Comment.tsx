import React from 'react';
import {printTime} from './util';
import {IComment} from '../types/Comment';
import {useSelector} from 'react-redux';
import {getCurrentUserName} from '../store/selectors';
import {CommentList} from './CommentList';

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
    onLikeClicked?: () => void,
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
    onLikeClicked?: () => void,
    isPostContent: boolean,
}

export function Comment(props: ICommentProps) {
    const {comment, onLikeClicked, isPostContent} = props;
    const currentUserName = useSelector(getCurrentUserName);
    return (
        <div>
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
                <CommentContent isFullWidth={isPostContent} content={comment.content} author={comment.user.username}/>
                {isPostContent && (
                    <CommentLikeButton isLiked={currentUserName !== undefined && comment.likes.has(currentUserName)} onLikeClicked={onLikeClicked}/>
                )}
                <CommentFunctionBar
                    isTimeOnly={isPostContent}
                    likeCount={comment.likes.size}
                    time={comment.timeSincePosted}
                />
            </div>
            {comment.replies.length > 0 && (
                <div style={{marginLeft: 60}}>
                    <CommentList comments={comment.replies}/>
                </div>
            )}
        </div>
    )
}