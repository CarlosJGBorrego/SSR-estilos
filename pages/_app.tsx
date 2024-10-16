// pages/_app.tsx
import '../public/styles/globals.css'; // Asegúrate de que esta línea esté presente
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default MyApp;
