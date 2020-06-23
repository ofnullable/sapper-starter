import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: (req) => ({
        auth: req.auth || {},
        users: req.users || [],
        settings: req.settings || {},
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.error('Fail to start server 😭', err);
    console.log(`🌟Polka + Sapper Server running on ${PORT}🌟`);
  });
