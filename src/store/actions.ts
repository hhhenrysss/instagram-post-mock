export enum ActionTypes {
    REQUEST_COMMENTS,
    REQUEST_POST,
    LIKE_COMMENT,
    REPLY_COMMENT,
    LIKE_REPLY
}

export interface Action {
    type: ActionTypes,
    payload: unknown
}

export interface RequestCommentsAction extends Action {
    payload: {
        postID: string,
        currentPage: number,
        pageSize: number
    }
}

export interface RequestPostAction extends Action {
    // no payload; assumes only one post
    payload: null
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
        username: string,
        replyContent: string
    }
}

export interface LikeReplyAction extends Action {
    payload: {
        postID: string,
        commentID: string,
        username: string
    }
}