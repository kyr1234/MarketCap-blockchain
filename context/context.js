import { createContext, useState, useEffect } from 'react'

export const CoinMarket = createContext()

export const CoinMarketProvider = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }
  <CoinMarket.Provider
    value={{
      getTopTenCoins,
    }}
  >
    {children}
  </CoinMarket.Provider>
}
