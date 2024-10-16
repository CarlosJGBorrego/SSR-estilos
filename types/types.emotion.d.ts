// types/emotion.d.ts
import { EmotionCache } from '@emotion/react';

declare module 'next/app' {
  interface AppProps {
    emotionCache?: EmotionCache;
  }
}
