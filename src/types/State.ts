import {IPost} from './Post';
import {IProfile} from './Profile';

export interface IState {
    post?: IPost,
    user?: IProfile,
}