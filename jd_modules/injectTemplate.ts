export {}; // typescript quick-fix, turns this file into a ts module, I believe

const injectTemplate = (template: String, name: String, id: Number) => {
    let localTemplate = template.replace(/%LANGUAGE_NAME%/g, `${name}`);
    localTemplate = localTemplate.replace(/%LANGUAGE_ID%/g, `${id}`);

    return localTemplate;
};

module.exports = injectTemplate;
