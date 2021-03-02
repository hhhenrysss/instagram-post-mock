import React, {ChangeEvent} from 'react';

interface ICommentInputProps {
    comment: string,
    onCommentChange: (comment: string) => void,
}

export function CommentInput({comment, onCommentChange}: ICommentInputProps) {
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => onCommentChange(e.target.value);
    return (
        <div style={{display: 'flex', justifyItems: 'center'}}>
            <div style={{maxHeight: '100', overflow: 'auto'}}>
                <textarea name={'post-new-comment'} value={comment} onChange={onChange}/>]
            </div>
            <button style={{marginLeft: 'auto', color: comment === '' ? 'gray' : '#3498DB'}}>Post</button>
        </div>
    )
}