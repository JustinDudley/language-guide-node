const http = require('http');
const fs = require('fs');

let overviewHtml = fs.readFileSync('./templates/overview.html', 'utf-8');

const server = http.createServer(
    (
        req: { url: any },
        res: {
            writeHead: (arg0: number, arg1: { 'Content-Type': string }) => void;
            end: (arg0: string) => void;
        },
    ) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(overviewHtml);
    },
);

server.listen(8080, '127.0.0.1', () => {
    console.log('Server is listening on port 8080');
});
