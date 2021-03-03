import {IComment} from '../../types/Comment';
import {ActionTypes, IAction} from '../actionTypes';
import {dataSource, DataSource} from '../../data-source/dataSource';
import {Thunk} from '../thunkType';

export interface IReplyPostActionPayload {
    comment: IComment,
}

export interface IReplyPostAction extends IAction {
    payload: IReplyPostActionPayload
}

export function replyPost(...args: Parameters<typeof DataSource.prototype.addComment>): Thunk {
    return async dispatch => {
        const comment = await dataSource.addComment(...args);
        if (comment) {
            dispatch({type: ActionTypes.FETCH_USER, payload: {comment} as IReplyPostActionPayload});
        }
    }
}