export enum ActionTypes {
    FETCH_COMMENTS,
    FETCH_POST,
    FETCH_USER,
    LIKE_COMMENT,
    REPLY_COMMENT,
    REPLY_POST,
    LIKE_REPLY
}

export interface IAction {
    type: ActionTypes,
    payload: unknown
}
