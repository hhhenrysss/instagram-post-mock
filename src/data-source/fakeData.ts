import {IPost} from '../types/Post';
import {IComment} from '../types/Comment';

export const currentPost: IPost = {
    location: 'Lorem ipsum dolor sit amet, consectetur',
    user: {
        username: 'Lorem ipsum',
        pictureURL: '/profile_pics/1.jpg'
    }
};

export const currentComments: IComment[] = [];

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 100; currentComments.length < 100; i += randomInt(100, 7 * 24 * 3600)) {
    currentComments.push({
        id: currentComments.length.toString(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum eget elit non euismod. Suspendisse a risus vestibulum, mollis lectus non, imperdiet diam. Aliquam eu ex laoreet nulla ornare cursus vitae viverra est.',
        timeSincePosted: i,
        likeCount: randomInt(0, 10),
        replies: [],
        user: {
            username: `user ${i}`,
            pictureURL: `/profile_pics/${i % 5 + 1}.jpg`
        }
    });
}