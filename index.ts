const http = require('http');
const fs = require('fs');

const injectTemplate = require('./jd_modules/injectTemplate');

const overviewHtml: String = fs.readFileSync(
    './templates/overview.html',
    'utf-8',
);
const detailHtml: String = fs.readFileSync('./templates/detail.html', 'utf-8');
const data = fs.readFileSync(`${__dirname}/data/languages.json`, 'utf-8');
const languages = JSON.parse(data);

const detailHtmlArray = languages.map((language: { name: any }) =>
    injectTemplate(detailHtml, language.name),
);
const detailHtmlString = detailHtmlArray.join('');

const server = http.createServer(
    (
        req: { url: any },
        res: {
            writeHead: (arg0: number, arg1: { 'Content-Type': string }) => void;
            end: (arg0: string) => void;
        },
    ) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(overviewHtml.replace(/%DETAIL_STRING%/g, detailHtmlString));
    },
);

server.listen(8080, '127.0.0.1', () => {
    console.log('Server is listening on port 8080');
});
