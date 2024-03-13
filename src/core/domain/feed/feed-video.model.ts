import { UserProfile } from "../user/user-profile.model";

export class FeedVideo {
    id!: string;
    url!: string;
    profile!: UserProfile;
    avatar!: string;
    poster!: string;
    constructor(data?: FeedVideo) {
        if (data) Object.assign(this, data);
    }
}