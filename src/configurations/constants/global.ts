export const colors = {
  baseColor: "#ff084e",
};

export const APP_RESYNC_INTERVAL = 30000;

export const supportedLanguages = {
  en: {
    name: "English",
    translationFileLoader: () => require("../react-native-adapter/i18n/en.json"),
  },
  fr: {
    name: "French",
    translationFileLoader: () => require("../react-native-adapter/i18n/fr.json"),
  },
};

export const defaultTranslations = {
  fr: {
    we_encountered_an_unexpected_error_during_the_operation_check_your_internet_connection_and_try_again:
      "Nous avons rencontré une erreur inattendue lors de l'opération, vérifiez votre connection internet et réessayez",
    we_encountered_an_unexpected_error_during_the_operation:
      "Nous avons rencontré une erreur inattendue lors de l'opération",
  },
  en: {
    we_encountered_an_unexpected_error_during_the_operation_check_your_internet_connection_and_try_again:
      "We encountered an unexpected error during the operation. Check your internet connection and try again",
    we_encountered_an_unexpected_error_during_the_operation:
      "We encountered an unexpected error during the operation",
  },
};
