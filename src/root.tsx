import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import GlobalStyles from '@public/styles/app.sass';
export default component$(() => {
  useStyles$(GlobalStyles)
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </head>
      <body>
        <main>
          <RouterOutlet />
          <ServiceWorkerRegister />
        </main>
      </body>
    </QwikCity>
  );
});
