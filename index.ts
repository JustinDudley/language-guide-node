const http = require('http');

const server = http.createServer(
    (
        req: { url: any },
        res: {
            writeHead: (arg0: number, arg1: { 'Content-Type': string }) => void;
            end: (arg0: string) => void;
        },
    ) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(
            '<html><head><link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/chequered-flag_1f3c1.png" /></head><body><div>Hello World!</div></body></html>',
        );
    },
);

server.listen(8080, '127.0.0.1', () => {
    console.log('Server is listening on port 8080');
});
