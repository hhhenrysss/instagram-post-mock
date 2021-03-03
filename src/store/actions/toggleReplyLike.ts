import {ActionTypes, IAction} from '../actionTypes';
import {dataSource, DataSource} from '../../data-source/dataSource';
import {Thunk} from '../thunkTypes';

export interface IToggleReplyLikeActionPayload {
    commentID: string,
    replyID: string,
    username: string
}

export interface IToggleReplyLikeAction extends IAction {
    payload: IToggleReplyLikeActionPayload
}

export function toggleReplyLike(...args: Parameters<typeof DataSource.prototype.toggleReplyLike>): Thunk {
    return async dispatch => {
        await dataSource.toggleReplyLike(...args);
        dispatch({type: ActionTypes.LIKE_REPLY, payload: args[0] as IToggleReplyLikeActionPayload})
    }
}