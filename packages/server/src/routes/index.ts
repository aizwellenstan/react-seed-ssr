import path from 'path';
import express from 'express';
import render from '../../../client';
import manifest from '../../../client/static/build/manifest.json';

const client = require.resolve('../../../client');
const router = express.Router();

// Service worker
router.use('/sw.js', (_, res) => {
  res.sendFile(path.resolve(client, '../../static/build/sw.js'));
});

// Progressive web app
router.use('/manifest.json', ({ i18n }, res) => {
  res.json({
    name: i18n.t('meta.title', { defaultValue: 'Refined itsukara.link' }),
    short_name: i18n.t('meta.title_short', { defaultValue: 'Ril' }),
    display: 'standalone',
    icons: [
      {
        src: '/android-chrome.png',
        size: '250x250',
        type: 'image/png',
      },
    ],
    start_url: '/activities',
    theme_color: '#F80652',
    background_color: '#C70542',
  });
});

// Server side rendering
router.use(async (req, res) => {
  const result = await render({
    manifest,
    i18n: req.i18n,
    location: req.url,
  });

  res.status(result.statusCode);
  res.send(`<!DOCTYPE html>\n
  <link rel="stylesheet" href="https://product.nadi3docms.com/nadidemo4/assets/css/bootstrap.min.css">\n
  <link rel="stylesheet" href="https://product.nadi3docms.com/nadidemo4/assets/css/login.css">\n
  <script type="text/javascript" src="https://product.nadi3docms.com/nadidemo4/assets/js/jquery-3.2.1.min.js"></script>\n
  <script type="text/javascript" src="https://product.nadi3docms.com/nadidemo4/assets/js/bootstrap.min.js"></script>\n
  <script type="text/javascript" src="https://product.nadi3docms.com/nadidemo4/assets/js/jquery.marquee.min.js"></script>\n
  <script type="text/javascript" src="https://product.nadi3docms.com/nadidemo4/assets/js/owl.carousel.min.js"></script>\n
  <script type="text/javascript" src="https://product.nadi3docms.com/nadidemo4/assets/js/main.js"></script>\n
  ${result.staticMarkup}`);
});

export const routes = router;
