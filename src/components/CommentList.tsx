import {IComment} from '../types/Comment';
import {Comment} from './Comment';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from '../store/thunkTypes';
import {toggleCommentLike} from '../store/actions/toggleCommentLike';
import {getCurrentUserName} from '../store/selectors';
import React from 'react';

export function CommentList({comments}: {comments: IComment[]}) {
    const dispatch = useDispatch() as Dispatch;
    const username = useSelector(getCurrentUserName);
    return (
        <div>
            {comments.map(c => {
                const onLikeClicked = () => {
                    if (!username) {
                        return;
                    }
                    dispatch(toggleCommentLike({commentID: c.id, username}));
                };
                return (
                    <Comment key={c.id} comment={c} onLikeClicked={onLikeClicked} isPostContent={false}/>
                )
            })}
        </div>
    )
}