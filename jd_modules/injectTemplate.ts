export {}; // typescript quick-fix

const injectTemplate = (template: String, name: String) =>
    template.replace(/%LANGUAGE%/g, `${name}`);

module.exports = injectTemplate;
