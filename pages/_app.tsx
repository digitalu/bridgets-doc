import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import "@code-hike/mdx/dist/index.css"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3MK6FKYZV1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3MK6FKYZV1');`,
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
