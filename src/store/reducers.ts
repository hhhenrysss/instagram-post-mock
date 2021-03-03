import {IState} from '../types/State';
import {Action} from './actions';

const initialState: IState = {
    allAvailableComments: undefined,
    comments: undefined,
    post: undefined
}

export function commentReducers(state=initialState, action: Action) {

}