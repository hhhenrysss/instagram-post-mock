import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {commentReducers} from './reducers';

export const store = createStore(commentReducers, applyMiddleware(thunk));