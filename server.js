const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/{implementation}',
    handler: async function(request, h) {
        try {
            const jsContents = await readFileAsync(`${__dirname}/dist/${request.params.implementation}/bundle.js`, 'utf8');

            return `
                <!doctype html>
                <html>
                    <head></head>
                    <body>
                        <div id="root"></div>
                        <script>${jsContents}</script>
                    </body>
                </html>
            `;
        }
        catch (err) {
            console.log(err);

            return 'Path does not exist';
        }
    }
});

async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at: ', server.info.uri);
}

start();