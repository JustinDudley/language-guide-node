import { Language } from '../models/Language';
export {}; // typescript quick-fix, turns this file into a ts module, I believe

const injectTemplate = (template: String, language: Language) => {
    let localTemplate = template.replace(
        /%LANGUAGE_NAME%/g,
        `${language.name}`,
    );
    localTemplate = localTemplate.replace(/%LANGUAGE_ID%/g, `${language.id}`);

    return localTemplate;
};

module.exports = injectTemplate;
