import Provider from '@/components/commons/Provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import 'styles/globals.css';
import 'public/fonts/pretendard/font.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider pageProps={pageProps}>
      <Component {...pageProps} />
      <Toaster
        containerStyle={{ fontSize: '16px', fontWeight: '500' }}
        toastOptions={{
          style: {
            padding: '10px 12px',
            color: '#242424',
            borderRadius: '999px',
          },
        }}
      />
    </Provider>
  );
}
