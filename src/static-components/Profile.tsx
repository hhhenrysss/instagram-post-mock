import React from 'react';
import profilePicture from '../resources/profile_pic.jpg';

function ProfilePicture() {
    return (
        <div
            style={{gridRow: `1/3`, gridColumn: `1`, margin: 'auto', position: 'relative', width: 40, height: 40, borderRadius: 1000, background: `linear-gradient(214deg, rgba(250,20,179,1) 0%, rgba(255,214,0,1) 100%)`}}
        >
            <img
                style={{width: 36, height: 36, position: 'absolute', top: 2, left: 2, borderRadius: 1000}}
                src={profilePicture}
                alt={'white blonde female'}
            />
            {/*Photo by Photo by Jonathan Cosens Photography on Unsplash*/}
        </div>
    )
}

function ProfileTitle() {
    return <h6 style={{gridColumn: `2`, gridRow: `1`, margin: 0, fontSize: '14px'}}>Lorem ipsum</h6>;
}

function ProfileMenuIcon() {
    return <div style={{gridRow: `1/3`, gridColumn: `3`, margin: 'auto'}}><span className="material-icons">more_horiz</span></div>
}

function ProfileDescription() {
    return <p style={{gridColumn: `2`, gridRow: `2`, fontSize: '12px', margin: 0}}>Lorem ipsum dolor sit amet, consectetur</p>
}

export function Profile() {
    return (
        <div
            style={{alignItems: 'center', display: 'grid', gridRowGap: 0, gridColumnGap: 5, gridTemplateColumns: `46px 1fr 30px`, gridTemplateRows: `23px 23px`}}
        >
            <ProfilePicture/>
            <ProfileTitle/>
            <ProfileDescription/>
            <ProfileMenuIcon/>
        </div>
    );
}