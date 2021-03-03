import {IProfile} from './Profile';

export interface IPost {
    postID: string,
    location: string,
    user: IProfile,
}