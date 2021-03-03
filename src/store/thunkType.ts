import {ThunkAction} from 'redux-thunk';
import {IState} from '../types/State';
import {IAction} from './actionTypes';

export type Thunk<ReturnType = void> = ThunkAction<ReturnType, IState, unknown, IAction>









