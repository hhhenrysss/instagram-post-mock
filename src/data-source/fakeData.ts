import {IPost} from '../types/Post';
import {IProfile} from '../types/Profile';

const currentComments = [];

// function randomInt(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

const ids = [100, 595643, 719087, 948582, 1298351, 1444978, 1569612, 2106583, 2682488, 3073437, 3500289, 3863941, 4202791, 4695912, 4811708, 5200544, 5696211, 5983773, 6297982, 6817047, 7299575, 7812404, 7963934, 7990860, 8580213, 8600101, 9148034, 9287900, 9485109, 9496171, 9748302, 9923036, 9994638, 10186514, 10538552, 10545331, 11146300, 11665467, 12245770, 12318223, 12674470, 13249147, 13343367, 13714016, 13857509, 14335944, 14504805, 14965308, 15062898, 15160557, 15368715, 15825740, 16376809, 16898071, 17177071, 17456572, 17699321, 18286157, 18720741, 18767087, 19364264, 19759343, 19901825, 20015183, 20575589, 20842842, 21344982, 21897282, 22258680, 22794161, 23015844, 23366170, 23854924, 24337804, 24472895, 24511648, 24801191, 24838665, 25206702, 25370176, 25625634, 25814582, 25963682, 26244259, 26804288, 27000828, 27147327, 27491916, 27587911, 27848746, 28155466, 28673615, 28836334, 29036191, 29324862, 29615913, 29645033, 30145575, 30581312, 30669097];

for (const i of ids) {
    const commentID = i.toString();
    currentComments.push({
        id: commentID,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum eget elit non euismod. Suspendisse a risus vestibulum, mollis lectus non, imperdiet diam. Aliquam eu ex laoreet nulla ornare cursus vitae viverra est.',
        timeSincePosted: i,
        likes: new Set(['1', '2']),
        replies: [],
        user: {
            username: `user ${i}`,
            pictureURL: `/profile_pics/${i % 5 + 1}.jpg`
        }
    });
}

// todo: this data structure does not accommodate for hashtags
export const currentPost: IPost = {
    replies: currentComments,
    content: 'Donec lobortis sit amet elit id congue. Fusce tempor, ante in pulvinar consequat, orci lorem condimentum diam, vel laoreet dui orci vel est. Ut malesuada felis vitae velit ornare tincidunt.',
    id: 'post1',
    totalCommentsSize: 0,
    location: 'Lorem ipsum dolor sit amet, consectetur',
    user: {
        username: 'Lorem ipsum',
        pictureURL: '/profile_pics/1.jpg'
    },
    imageURL: '/pics/post_pic.jpg',
    timeSincePosted: 1234567890,
    likes: new Set<string>()
};

export const currentUser: IProfile = {
    username: 'current user',
    pictureURL: '/profile_pics/2.jpg'
}