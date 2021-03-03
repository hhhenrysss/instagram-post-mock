import {IPost} from '../../types/Post';
import {ActionTypes, IAction} from '../actionTypes';
import {dataSource} from '../../data-source/dataSource';
import {Thunk} from '../thunkType';

export interface IFetchPostActionPayload {
    post: IPost
}

export interface IFetchPostAction extends IAction {
    payload: IFetchPostActionPayload
}

export function fetchPost(): Thunk {
    return async dispatch => {
        const post = await dataSource.getCurrentPost();
        dispatch({type: ActionTypes.FETCH_POST, payload: {post}});
    }
}
