import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'

function Header() {
  const styles = {
    header: `bg-[#17171A] text-white flex gap-[100px] p-[30px] h-20`,
    wrapperclass: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    nav: `flex justify-center items-center gap-[20px]`,
    navitem: `relative mr-1 cursor-pointer hover:opacity-60`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputcontainer: `flex  items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`,
  }

  return (
    <div className={styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={220}
        height={220}
      />

      <div className={styles.wrapperclass}>
        <nav className={styles.nav}>
          <div className={styles.navitem}>
            <div className={styles.navlink}>Cryptocurrency</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navitem}>
            <div className={styles.navlink}>Exchanges</div>
          </div>

          <div className={styles.navitem}>
            <div className={styles.navlink}>NFT</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navitem}>
            <div className={styles.navlink}>Cryptown</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navitem}>
            <div className={styles.navlink}>Portfolio</div>
          </div>

          <div className={styles.navitem}>
            <div className={styles.navlink}>Watchlist</div>
          </div>

          <div className={styles.navitem}>
            <div className={styles.navlink}>Products</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navitem}>
            <div className={styles.navlink}>Learn</div>
          </div>
        </nav>

        <div className="flex items-center">
          <ConnectButton />
          <div className={styles.inputcontainer}>
            <Search />
            <input className={styles.input} placeholder="SEARCH" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
