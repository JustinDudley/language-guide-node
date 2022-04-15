// typescript isn't picking up any of these types
const http = require('http');
const fs = require('fs');
const url = require('url');

import { Language } from './models/Language';

// typescript isn't picking up this function's shape
const injectTemplate = require('./jd_modules/injectTemplate');

const overviewHtml: String = fs.readFileSync('./templates/overview.html', 'utf-8');
const cardHtml: string = fs.readFileSync('./templates/card.html', 'utf-8');
const detailHtml: string = fs.readFileSync('./templates/detail.html', 'utf-8');
const learningPathsHtml: string = fs.readFileSync('./templates/learning-paths.html', 'utf-8');
const data = fs.readFileSync(`${__dirname}/data/languages.json`, 'utf-8');
const languages: Language[] = JSON.parse(data);

const cardHtmlArray = languages.map((language) => injectTemplate(cardHtml, language));
const cardHtmlString = cardHtmlArray.join('');

const server = http.createServer(
    (
        req: { url: any },
        res: {
            writeHead: (arg0: number, arg1: { 'Content-Type': string }) => void;
            end: (arg0: string) => void;
        },
    ) => {
        const { pathname, query } = url.parse(req.url, true);

        if (pathname === '/' || pathname === '/overview') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(overviewHtml.replace(/%DETAIL_STRING%/g, cardHtmlString));
        } else if (pathname === '/detail') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(injectTemplate(detailHtml, languages[query.id]));
        } else if (pathname === '/learning-paths') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(learningPathsHtml);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('Page Not Found');
        }
    },
);

server.listen(8080, '127.0.0.1', () => {
    console.log('Server is listening on port 8080');
});
