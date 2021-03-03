import {IState} from '../types/State';
import {IComment} from '../types/Comment';

function createState(state: IState): IState {
    return {
        post: {
            ...state.post!,
            comments: new Map<string, IComment>()
        }
    };
}

function updateMapConditionally<T>(map: Map<string, T>, targetID: string, onFound: (old: T) => T): Map<string, T> {
    const newMap = new Map<string, T>();
    for (const [id, val] of map) {
        if (id === targetID) {
            newMap.set(id, onFound(val));
        } else {
            newMap.set(id, val);
        }
    }
    return newMap;
}

export function toggleCommentLike(state: IState, commentID: string, username: string) {
    if (!state.post) {
        return state;
    }
    const newState = createState(state);
    newState.post!.comments = updateMapConditionally(
        newState.post!.comments,
        commentID,
        old => {
            const newComment = {...old};
            const newLikes = new Set(newComment.likes);
            if (newLikes.has(username)) {
                newLikes.delete(username);
            } else {
                newLikes.add(username);
            }
            newComment.likes = newLikes;
            return newComment;
        }
    );
    return newState;
}


export function toggleReplyLike(state: IState, targetCommentID: string, targetReplyID: string, username: string) {
    if (!state.post) {
        return state;
    }
    const newState = createState(state);
    newState.post!.comments = updateMapConditionally(
        newState.post!.comments,
        targetCommentID,
        old => {
            const newReplies = updateMapConditionally(
                old.replies,
                targetReplyID,
                oldReply => {
                    const newReply = {...oldReply};
                    const newLikes = new Set(newReply.likes);
                    if (newLikes.has(username)) {
                        newLikes.delete(username);
                    } else {
                        newLikes.add(username);
                    }
                    newReply.likes = newLikes;
                    return newReply;
                }
            )
            return {...old, replies: newReplies};
        }
    );
    return newState;
}

export function addReplyToComment(state: IState, commentID: string, reply: IComment): IState {
    if (!state.post) {
        return state;
    }
    const newState = createState(state);
    for (const [id, comment] of state.post.comments.entries()) {
        if (id === commentID) {
            const newComment: IComment = {...comment, replies: new Map<string, IComment>(comment.replies)};
            newComment.replies.set(reply.id, reply);
            newState.post!.comments.set(id, newComment);
        } else {
            newState.post!.comments.set(id, comment);
        }
    }
    return newState;
}

export function addCommentToPost(state: IState, comment: IComment | IComment[]): IState {
    if (!state.post) {
        return state;
    }
    const newState = createState(state);
    const newComments = new Map<string, IComment>(state.post.comments);
    newComments.set(comment.id, comment);
    newState.post!.comments = newComments;
    return newState;
}

export function add