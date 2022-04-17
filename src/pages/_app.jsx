import '../../styles/globals.css'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => smoothscroll.polyfill(), [])
  return <Component {...pageProps} />
}

export default MyApp
