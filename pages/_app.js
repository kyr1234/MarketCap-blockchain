import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
     console.log(process.env.NEXT_BACKEND_CMC_API_KEY)
     console.log(process.env.NEXT_PUBLIC_SERVER)
     console.log(process.env.NEXT_PUBLIC_APP_ID)
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
