// REACT & NEXT IMPORTS
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'next-themes';

// PROGRESS LOADER
import NextNprogress from 'nextjs-progressbar';

// STITCHES.DEV
import { css, globalCss, darkTheme } from 'stitches.config';

// Styles..
import { reset } from '@/styles/reset';
import 'inter-ui/inter.css';
import '@/styles/global.css';

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

// Your App..
const App = ({ Component, pageProps }: AppProps) => {
  // Catch.. Set.. Theme
  const { theme, setTheme } = useTheme();

  // Inject globals & resets
  globalCss(reset, {
    html: {
      overflowX: 'hidden',
      backgroundColor: '$slate1',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      height: '100vh',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
  });

  return (
    <ThemeProvider>
      {/* <!-- META TAGS --> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <div
        className={appWrapper({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <NextNprogress
          color="linear-gradient(to right, #b5bdc8 0%,#828c95 36%,#28343b 100%)"
          startPosition={0.3}
          stopDelayMs={300}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
