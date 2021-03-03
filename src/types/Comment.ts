import {IProfile} from './Profile';

export interface IComment {
    id: string,
    content: string,
    timeSincePosted: number,
    likes: Set<string>,
    replies: Map<string, IComment>;
    user: IProfile
}

