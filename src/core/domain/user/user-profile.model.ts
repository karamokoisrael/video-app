export class UserProfile {
    username!: string;
    subtitle!: string;
    constructor(data?: UserProfile) {
        if (data) Object.assign(this, data)
    }
}