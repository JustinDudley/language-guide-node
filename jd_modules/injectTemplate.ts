export {}; // typescript quick-fix, turns this file into a ts module, I believe

const injectTemplate = (template: String, name: String) =>
    template.replace(/%LANGUAGE%/g, `${name}`);

module.exports = injectTemplate;
