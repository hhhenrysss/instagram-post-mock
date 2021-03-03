import {IState} from '../types/State';
import {
    Action,
    ActionTypes, FetchCommentsAction, FetchPostAction,
    LikeCommentAction,
    LikeReplyAction,
    ReplyCommentAction,
    ReplyPostAction
} from './actionTypes';
import {addCommentToPost, addReplyToComment, fetchPost, toggleCommentLike, toggleReplyLike} from './reducerHelpers';

const initialState: IState = {
    post: undefined
}

export function commentReducers(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.LIKE_COMMENT: {
            const payload = (action as LikeCommentAction).payload;
            return toggleCommentLike(state, payload.commentID, payload.username);
        }
        case ActionTypes.LIKE_REPLY: {
            const payload = (action as LikeReplyAction).payload;
            return toggleReplyLike(state, payload.commentID, payload.replyID, payload.username);
        }
        case ActionTypes.REPLY_COMMENT: {
            const payload = (action as ReplyCommentAction).payload;
            return addReplyToComment(state, payload.commentID, payload.reply);
        }
        case ActionTypes.REPLY_POST: {
            const payload = (action as ReplyPostAction).payload;
            return addCommentToPost(state, payload.comment);
        }
        case ActionTypes.FETCH_COMMENTS: {
            const payload = (action as FetchCommentsAction).payload;
            return addCommentToPost(state, payload.comments);
        }
        case ActionTypes.FETCH_POST: {
            const payload = (action as FetchPostAction).payload;
            return fetchPost(payload.post);
        }
        default:
            return state;
    }
}