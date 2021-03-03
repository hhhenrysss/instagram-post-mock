import {IComment} from '../../types/Comment';
import {IAction} from '../actionTypes';

export interface IFetchCommentsActionPayload {
    comments: IComment[]
}

export interface IFetchCommentsAction extends IAction {
    payload: IFetchCommentsActionPayload
}

// todo: implement pagination