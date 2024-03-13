export class FeedVideo {
    id!: string;
    url!: string;
    username!: string;
    avatar!: string;
    poster!: string;
    constructor(data?: FeedVideo) {
        if (data) Object.assign(this, data);
    }
}