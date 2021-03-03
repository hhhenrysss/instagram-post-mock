import {IComment} from './Comment';

export interface IPost extends IComment {
    location: string,
    totalCommentsSize: number,
    imageURL: string,
}