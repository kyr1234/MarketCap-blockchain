import React from "react"
import Header from '../components/Header'
import Trending from "../components/Trending"
import CMCTable from "../components/cmc-table/CMCTable"




const Home = () => {
  return (
    <div className="min-h-screen bg-[#17171a]">
      <Header />
      <Trending/>
       <CMCTable/> 
    </div>
  )
}

export default Home
