import "reflect-metadata"
import {inject, injectable} from "tsyringe";
import { TranslationServicePort } from "@/core/domain/globalization/translation-service.port";
import i18n from "@/libs/helpers/globalization.helper";


@injectable()
export class TranslationService implements TranslationServicePort {
    getLanguage() { return i18n.locale }
    formatDate(dateTime: any) {
        const date = new Date(dateTime);
        return date.toLocaleDateString(`${this.getLanguage()}-${this.getLanguage()}`);
    }
    t(param: any): string {
        return i18n.t(param);
    }
}