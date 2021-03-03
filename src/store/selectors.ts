import {IState} from '../types/State';

export function getCurrentUserName(state: IState) {
    return state.user?.username;
}

export function getPost(state: IState) {
    return state.post;
}