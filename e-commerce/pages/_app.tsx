import { store } from '@/src/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import AppBar from "../src/components/AppBar"
Provider

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Provider store={store}>
      <AppBar/>
      <Component {...pageProps} />
    </Provider>
  </>
  )
}
