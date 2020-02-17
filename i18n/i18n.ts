import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";

import en from "./locales/en.json";

i18n.locale = RNLocalize.getCountry();
i18n.fallbacks = true;
i18n.translations = { en };

export default i18n;
