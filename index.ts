const http = require('http');
const fs = require('fs');
const url = require('url');

import { Language } from './models/Language';

const injectTemplate = require('./jd_modules/injectTemplate');

const overviewHtml: String = fs.readFileSync(
    './templates/overview.html',
    'utf-8',
);
const cardHtml: String = fs.readFileSync('./templates/card.html', 'utf-8');
const data = fs.readFileSync(`${__dirname}/data/languages.json`, 'utf-8');
const languages: Language[] = JSON.parse(data);

const cardHtmlArray = languages.map((language) =>
    injectTemplate(cardHtml, language.name),
);
const cardHtmlString = cardHtmlArray.join('');

const server = http.createServer(
    (
        req: { url: any },
        res: {
            writeHead: (arg0: number, arg1: { 'Content-Type': string }) => void;
            end: (arg0: string) => void;
        },
    ) => {
        const { pathname } = url.parse(req.url, true);

        if (pathname === '/' || pathname === '/overview') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(overviewHtml.replace(/%DETAIL_STRING%/g, cardHtmlString));
        } else if (pathname === '/detail') {
            res.end('This is the detail page');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('Page Not Found');
        }
    },
);

server.listen(8080, '127.0.0.1', () => {
    console.log('Server is listening on port 8080');
});
