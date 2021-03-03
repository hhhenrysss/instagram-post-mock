import {IProfile} from './Profile';
import {IComment} from './Comment';

export interface IPost {
    postID: string,
    location: string,
    user: IProfile,
    comments: IComment[],
    totalCommentsSize: number,
    postContent: string,
}