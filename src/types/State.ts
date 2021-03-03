import {IPost} from './Post';
import {IComment} from './Comment';

export interface IState {
    post?: IPost,
    comments?: Map<string, IComment[]>,
    allAvailableComments?: number,
}