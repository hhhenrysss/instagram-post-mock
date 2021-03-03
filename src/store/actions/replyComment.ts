import {IComment} from '../../types/Comment';
import {ActionTypes, IAction} from '../actionTypes';
import {Thunk} from '../thunkTypes';
import {DataSource, dataSource} from '../../data-source/dataSource';

export interface IReplyCommentActionPayload {
    commentID: string,
    reply: IComment,
}

export interface IReplyCommentAction extends IAction {
    payload: IReplyCommentActionPayload
}

export function replyComment(...args: Parameters<typeof DataSource.prototype.addReplyToComment>): Thunk {
    return async dispatch => {
        const reply = await dataSource.addReplyToComment(...args);
        if (reply) {
            dispatch({
                type: ActionTypes.FETCH_USER,
                payload: {reply, commentID: args[0][1]} as IReplyCommentActionPayload
            });
        }
    }
}