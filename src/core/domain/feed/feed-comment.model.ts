export type FeedCommentType = "default" | "highlighted";

export class FeedComment {
    username!: string;
    type!: FeedCommentType;
    text!: string;
    constructor(data?: FeedComment) {
        if (data) Object.assign(this, data);
    }
}