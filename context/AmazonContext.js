import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'

export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {
  const [username, setusername] = useState('')
  const [nickname, setNickname] = useState('')
  const [assets, setassets] = useState([])
  const {
    isAuthenticated,
    authenticate,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis()

  const {
    data: assetData,
    error: assetsDataError,
    isLoading: assetDataisLoading,
  } = useMoralisQuery('assets')

  const getasset = async () => {
    try {
      await enableWeb3()
      // const query = new Moralis.Query('Assets')
      // const results = await query.find()

      setassets(assetData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set('nickname', nickname)
        user.save()
        setNickname('')
      } else {
        console.log("CAN'T ADD A EMPTY NICKNAME")
      }
    } else {
      console.log('NO USER')
    }
  }

  useEffect(() => {
    ;(async () => {
      if (isAuthenticated) {
        const currentusername = await user?.get('nickname')
        setusername(currentusername)
      }
    })()
  }, [isAuthenticated, user, username])

  useEffect(() => {
    ; (async () => {
      
      await getasset()
    })()
  }, [isWeb3Enabled])

  return (
    <AmazonContext.Provider
      value={{
        isAuthenticated,
        nickname,
        setNickname,
        username,
        handleSetUsername,
        assets,
      }}
    >
      {children}
    </AmazonContext.Provider>
  )
}
