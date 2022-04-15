import { Language } from '../models/Language';
export {}; // typescript quick-fix, turns this file into a ts module, I believe

const injectTemplate = (template: String, language: Language) => {
    let localTemplate = template.replace(
        /%LANGUAGE_NAME%/g,
        `${language.name}`,
    );
    localTemplate = localTemplate.replace(/%LANGUAGE_ID%/g, `${language.id}`);
    localTemplate = localTemplate.replace(
        /%LANGUAGE_YEAR%/g,
        `${language.origin.year}`,
    );
    localTemplate = localTemplate.replace(
        /%ORIGIN_STORY%/g,
        `${language.origin.originStory}`,
    );
    localTemplate = localTemplate.replace(
        /%HISTORY%/g,
        `${language.origin.history}`,
    );
    localTemplate = localTemplate.replace(
        /%LANGUAGE_USED_FOR%/g,
        `${language.usedFor}`,
    );
    localTemplate = localTemplate.replace(
        /%EXPLANATION%/g,
        `${language.explanation}`,
    );
    localTemplate = localTemplate.replace(
        /%STARTER_LANGUAGE%/g,
        `${language.starterLanguage}`,
    );
    localTemplate = localTemplate.replace(
        /%RECOMMENDATION%/g,
        `${language.recommendation}`,
    );
    localTemplate = localTemplate.replace(/%EMOJI%/g, `${language.emoji}`);

    return localTemplate;
};

module.exports = injectTemplate;
