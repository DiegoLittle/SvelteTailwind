const sirv = require('sirv');
const polka = require('polka');
const compress = require('compression')();

// Init `sirv` handler
const assets = sirv('public', {
    dev: true,
    single:true,
    maxAge: 31536000, // 1Y
    immutable: true
});

polka()
    .use(compress, assets)
    //   .use('/api', require('./api'))
    .listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });