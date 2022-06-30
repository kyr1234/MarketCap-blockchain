import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://nyeegjnxzsgw.usemoralis.com:2053/server'
      appId='s1iSUW1BV1Hpk4ij2RUYmki3y0fRfONT213oDjWL'
    >
      
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
 
    </MoralisProvider>
  )
}

export default MyApp
