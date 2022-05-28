import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext()
const getTopTenCoins = async () => {
  try {
    const res = await fetch('/api/getTopTen')
    const data = await res.json()
    
    return data.data.data
  } catch (e) {
    console.log(e.message)
  }
}

export const CoinMarketProvider = ({ children }) => {

  return (

  <CoinMarketContext.Provider
    value={{
      getTopTenCoins,
    }}
  >
    {children}
  </CoinMarketContext.Provider>
  )
}
