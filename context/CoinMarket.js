import { createContext, useState, useEffect } from 'react'

export const CoinMarket = createContext()

export const CoinMarketProvider = ({ children }) => {
  const getdata = async () => {
    try {
      const res = await fetch('/api/getTop')
      const data = await res.json()
      console.log(data)

      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  ;<CoinMarket.Provider
    value={{
      getdata,
    }}
  >
    {children}
  </CoinMarket.Provider>
}
