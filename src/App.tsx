import React, {useMemo, useState} from 'react';
import './App.css';
import {PostPicture} from './static-components/PostPicture';
import {Comment} from './components/Comment';
import {useSelector} from 'react-redux';
import {getPost} from './store/selectors';
import {PostHeader} from './static-components/PostHeader';
import {CommentList} from './components/CommentList';
import {CommentInput} from './components/CommentInput';

function App() {
    const [isLandscape, setIsLandscape] = useState(false);
    const post = useSelector(getPost);
    const [commentText, setCommentText] = useState('');
    if (!post) {
        return <></>
    }
    if (isLandscape) {
        return (
            <div style={{display: 'flex'}}>
                <PostPicture/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <PostHeader post={post}/>
                    <Comment comment={post} isPostContent={true}/>
                    <CommentList comments={post.replies}/>
                    <CommentInput comment={commentText} onCommentChange={setCommentText}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

export default App;
