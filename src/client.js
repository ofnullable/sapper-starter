import * as sapper from '@sapper/app';

sapper
  .start({
    target: document.querySelector('#sapper'),
  })
  .catch((err) => {
    console.error('Fail to start client 😭', err);
  });
