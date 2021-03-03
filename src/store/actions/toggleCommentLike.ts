import {ActionTypes, IAction} from '../actionTypes';
import {dataSource, DataSource} from '../../data-source/dataSource';
import {Thunk} from '../thunkType';

export interface IToggleCommentLikeActionPayload {
    commentID: string,
    username: string
}

export interface IToggleCommentLikeAction extends IAction {
    payload: IToggleCommentLikeActionPayload
}

export function toggleCommentLike(...args: Parameters<typeof DataSource.prototype.toggleCommentLike>): Thunk {
    return async dispatch => {
        await dataSource.toggleCommentLike(...args);
        dispatch({type: ActionTypes.LIKE_COMMENT, payload: args[0] as IToggleCommentLikeActionPayload})
    }
}