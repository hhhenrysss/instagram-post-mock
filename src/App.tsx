import React, {useState} from 'react';
import './App.css';
import {Profile} from './static-components/Profile';
import {Comment} from './components/Comment';
import {PostFunctionBar} from './static-components/PostFunctionBar';
import {PostTime} from './static-components/PostTime';
import {PostPicture} from './static-components/PostPicture';

function App() {
    const [isLandscape, setIsLandscape] = useState(false);
    if (isLandscape) {
        return (
            <div style={{display: 'flex'}}>
                <PostPicture/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Profile/>

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
