import React from 'react';
import {printTime} from '../components/util';

export function PostTime({time}: {time: number}) {
    return (
        <div style={{color: 'gray', fontSize: 12}}>
            <span>{printTime(time, true).toLocaleUpperCase() + ' AGO'}</span>
        </div>
    )
}