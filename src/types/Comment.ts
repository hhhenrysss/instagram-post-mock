export interface IComment {
    id: string,
    author: string,
    content: string,
    timeSincePosted: number,
    likeCount: number,
    replies: IComment[];
}