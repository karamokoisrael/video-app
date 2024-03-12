import {User} from "@/core/domain/user/user.model";
import {AppConfig} from "@/core/domain/configuration/config.model";

export abstract class TranslationServicePort {
    abstract getLanguage(): string;
    abstract formatDate(dateTime: any): string;
    abstract t(param: any): string;
}