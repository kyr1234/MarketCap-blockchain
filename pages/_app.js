import '../styles/globals.css'
import {CoinMarketProvider} from "../context/CoinMarket"
import { MoralisProvider } from 'react-moralis'
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <CoinMarketProvider>
        
      <Component {...pageProps} />
    </CoinMarketProvider>

    </MoralisProvider>
  )
}

export default MyApp
