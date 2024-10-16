// pages/_document.tsx
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;
    const emotionCache = createEmotionCache();
    const emotionServer = createEmotionServer(emotionCache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props) => <App emotionCache={emotionCache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = emotionServer.extractCritical(initialProps.html);
    
    return {
      ...initialProps,
      styles: [
        <>
          {emotionStyles.styles}
        </>,
        initialProps.styles,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/fonts/roboto/roboto.css" />
          <link rel="stylesheet" href="/styles/globals.css" /> {/* Asegúrate de que esta línea esté presente */}
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
