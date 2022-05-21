import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Trending from "../components/Trending"
const Home = () => {
  return (
    <div className="min-h-screen bg-[#17171a]">

      <Header />
      <Trending/>
    </div>
  )
}

export default Home
