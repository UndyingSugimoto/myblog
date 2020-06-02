import { AppProps } from 'next/app';
import '../styles/index.css';
import 'highlight.js/styles/atom-one-dark.css';

import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
