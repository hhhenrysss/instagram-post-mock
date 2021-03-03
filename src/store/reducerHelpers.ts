import {IState} from '../types/State';
import {IComment} from '../types/Comment';
import {IPost} from '../types/Post';
import {IProfile} from '../types/Profile';

function createState(state: IState): IState {
    return {
        post: {
            ...state.post!,
            comments: []
        }
    };
}

function updateArrayConditionally<T>(
    old: T[],
    getID: (val: T) => string,
    targetID: string,
    onFound: (old: T) => T
): T[] {
    const newArray = [];
    for (const val of old) {
        if (getID(val) === targetID) {
            newArray.push(onFound(val));
        } else {
            newArray.push(val);
        }
    }
    return newArray;
}

export function toggleCommentLike(state: IState, commentID: string, username: string) {
    if (!state.post) {
        return state;
    }
    const newState = createState(state);
    newState.post!.comments = updateArrayConditionally(
        newState.post!.comments,
        val => val.id,
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
    newState.post!.comments = updateArrayConditionally(
        newState.post!.comments,
        val => val.id,
        targetCommentID,
        old => {
            const newReplies = updateArrayConditionally(
                old.replies,
                val => val.id,
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
    for (const comment of state.post.comments) {
        if (comment.id === commentID) {
            const newComment: IComment = {...comment, replies: [...comment.replies, reply]};
            newState.post!.comments.push(newComment);
        } else {
            newState.post!.comments.push(comment);
        }
    }
    return newState;
}

export function addCommentToPost(state: IState, comment: IComment | IComment[]): IState {
    if (!state.post) {
        return state;
    }
    const newState = createState(state);
    const newComments = [...state.post.comments];
    if (!Array.isArray(comment)) {
        comment = [comment];
    }
    newComments.push(...comment);
    newState.post!.comments = newComments;
    return newState;
}

export function setPost(state: IState, post: IPost): IState {
    return {...state, post};
}

export function setUser(state: IState, user: IProfile): IState {
    return {...state, user};
}