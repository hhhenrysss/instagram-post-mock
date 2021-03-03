import {IComment} from '../types/Comment';
import {IPost} from '../types/Post';

export enum ActionTypes {
    FETCH_COMMENTS,
    FETCH_POST,
    LIKE_COMMENT,
    REPLY_COMMENT,
    REPLY_POST,
    LIKE_REPLY
}

export interface Action {
    type: ActionTypes,
    payload: unknown
}

export interface FetchCommentsAction extends Action {
    payload: {
        comments: IComment[]
    }
}

export interface FetchPostAction extends Action {
    payload: {
        post: IPost
    }
}

export interface LikeCommentAction extends Action {
    payload: {
        postID: string,
        commentID: string,
        username: string
    }
}

export interface ReplyCommentAction extends Action {
    payload: {
        postID: string,
        commentID: string,
        reply: IComment,
    }
}

export interface ReplyPostAction extends Action {
    payload: {
        postID: string,
        comment: IComment,
    }
}

export interface LikeReplyAction extends Action {
    payload: {
        postID: string,
        commentID: string,
        replyID: string,
        username: string
    }
}