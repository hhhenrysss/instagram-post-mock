import {IProfile} from '../../types/Profile';
import {ActionTypes, IAction} from '../actionTypes';
import {dataSource} from '../../data-source/dataSource';
import {Thunk} from '../thunkTypes';

export interface IFetchUserActionPayload {
    user: IProfile
}

export interface IFetchUserAction extends IAction {
    payload: IFetchUserActionPayload
}

export function fetchUser(): Thunk {
    return async dispatch => {
        const user = await dataSource.getCurrentUser();
        dispatch({type: ActionTypes.FETCH_USER, payload: {user}});
    }
}