import React from "react"
import Header from '../components/Header'
import Trending from "../components/Trending"
/* import CmcTable from  "../components/cmc-table/CmcTable" */



const Home = () => {
  return (
    <div className="min-h-screen bg-[#17171a]">
      <Header />
      <Trending/>
     {/*  <CmcTable/> */}
    </div>
  )
}

export default Home
