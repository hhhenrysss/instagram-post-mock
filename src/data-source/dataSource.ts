import {currentPost, currentUser} from './fakeData';
import {IComment} from '../types/Comment';
import {IToggleCommentLikeActionPayload} from '../store/actions/toggleCommentLike';
import {IToggleReplyLikeActionPayload} from '../store/actions/toggleReplyLike';

function sleep(seconds: number) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds);
    });
}

export class DataSource {
    constructor(
        private post = currentPost,
        private user = currentUser
    ) {
    }

    async getCurrentPost() {
        await sleep(30);
        return this.post;
    }

    async getCurrentUser() {
        await sleep(30);
        return this.user;
    }

    async getComments(page: number, pageSize: number) {
        await sleep(30);
        if (page < 0) {
            throw new Error('page must be positive');
        }
        if (page * pageSize >= this.post.comments.length) {
            throw new Error('request out of range');
        }
        return [...this.post.comments.values()].slice(page * pageSize, (page + 1) * pageSize);
    }

    async getTotalCommentsLength() {
        await sleep(30);
        return this.post.comments.length;
    }

    async toggleCommentLike({commentID, username}: IToggleCommentLikeActionPayload) {
        for (const comment of this.post.comments) {
            if (comment.id === commentID) {
                if (comment.likes.has(username)) {
                    comment.likes.delete(username);
                } else {
                    comment.likes.add(username);
                }
                return;
            }
        }
    }

    async toggleReplyLike({commentID, replyID, username}: IToggleReplyLikeActionPayload) {
        for (const comment of this.post.comments) {
            if (comment.id === commentID) {
                for (const reply of comment.replies) {
                    if (reply.id === replyID) {
                        if (reply.likes.has(username)) {
                            reply.likes.delete(username);
                        } else {
                            reply.likes.add(username);
                        }
                        return;
                    }
                }
            }
        }
    }

    createComment(content: string): IComment {
        const id = this.post.comments.length + 1;
        return {
            content,
            id: id.toString(),
            likes: new Set<string>(),
            replies: [],
            timeSincePosted: id,
            user: this.user
        }
    }

    async addComment(content: string) {
        const newComment = this.createComment(content);
        this.post.comments.push(newComment);
        return newComment;
    }

    async addReplyToComment(content: string, commentID: string) {
        for (const comment of this.post.comments) {
            if (comment.id === commentID) {
                const newComment = this.createComment(content)
                comment.replies.push(newComment);
                return newComment;
            }
        }
        return null;
    }
}

export const dataSource = new DataSource();