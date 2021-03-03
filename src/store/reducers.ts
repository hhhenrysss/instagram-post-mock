import {IState} from '../types/State';
import {ActionTypes, IAction} from './actionTypes';
import {
    addCommentToPost,
    addReplyToComment,
    setPost,
    setUser,
    toggleCommentLike,
    toggleReplyLike
} from './reducerHelpers';
import {IToggleCommentLikeAction} from './actions/toggleCommentLike';
import {IToggleReplyLikeAction} from './actions/toggleReplyLike';
import {IReplyCommentAction} from './actions/replyComment';
import {IReplyPostAction} from './actions/replyPost';
import {IFetchCommentsAction} from './actions/fetchComments';
import {IFetchPostAction} from './actions/fetchPost';
import {IFetchUserAction} from './actions/fetchUser';

const initialState: IState = {
    post: undefined
}

export function commentReducers(state = initialState, action: IAction) {
    switch (action.type) {
        case ActionTypes.LIKE_COMMENT: {
            const payload = (action as IToggleCommentLikeAction).payload;
            return toggleCommentLike(state, payload.commentID, payload.username);
        }
        case ActionTypes.LIKE_REPLY: {
            const payload = (action as IToggleReplyLikeAction).payload;
            return toggleReplyLike(state, payload.commentID, payload.replyID, payload.username);
        }
        case ActionTypes.REPLY_COMMENT: {
            const payload = (action as IReplyCommentAction).payload;
            return addReplyToComment(state, payload.commentID, payload.reply);
        }
        case ActionTypes.REPLY_POST: {
            const payload = (action as IReplyPostAction).payload;
            return addCommentToPost(state, payload.comment);
        }
        case ActionTypes.FETCH_COMMENTS: {
            const payload = (action as IFetchCommentsAction).payload;
            return addCommentToPost(state, payload.comments);
        }
        case ActionTypes.FETCH_POST: {
            const payload = (action as IFetchPostAction).payload;
            return setPost(state, payload.post);
        }
        case ActionTypes.FETCH_USER: {
            const payload = (action as IFetchUserAction).payload;
            return setUser(state, payload.user);
        }
        default:
            return state;
    }
}