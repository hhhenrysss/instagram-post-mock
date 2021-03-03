import {currentComments, currentPost} from './fakeData';

function sleep(seconds: number) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds);
    });
}

export class DataSource {
    constructor(
        private post = currentPost,
        private comments = currentComments
    ) {}

    async getCurrentPost() {
        await sleep(30);
        return this.post;
    }

    async getComments(page: number, pageSize: number) {
        await sleep(30);
        if (page < 0) {
            throw new Error('page must be positive');
        }
        if (page * pageSize >= this.comments.length) {
            throw new Error('request out of range');
        }
        return this.comments.slice(page*pageSize, (page+1)*pageSize);
    }

    async getTotalCommentsLength() {
        await sleep(30);
        return this.comments.length;
    }
}