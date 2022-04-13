import React, { useState, useEffect } from 'react'
import { Headers } from '../global/constants'
import { useSelector } from 'react-redux'
import MultiWallet from '../../Modals/ConnectWallet'
import ErrorModal from '../../Modals/Error'
import WalletDetail from '../../Modals/walletdetail'
import Provider from '../../helpers/provider'
import { useLocation } from 'react-router-dom'

function Header() {
  const [walletOpen, setWalletOpen] = useState(false)
  const wallet = useSelector((state) => state.wallet.walletAddress)
  const [selectedWallet, setSelectedWallet] = useState(false)
  const { pathname } = useLocation()

  function setOpen() {
    setWalletOpen(false)
  }

  function setWalletConnectOpen() {
    setSelectedWallet(false)
  }

  function openWalletType() {
    setSelectedWallet(false)
    setWalletOpen(true)
  }

  useEffect(() => {
    if (wallet !== '') {
      setOpen()
    }
  }, [wallet])

  useEffect(() => {
    const targetedIndex = Headers.map((_path) => '/' + _path.link).indexOf(pathname)
    const idealActiveClasses = new Array(Headers.length).fill(false)
    idealActiveClasses[targetedIndex] = true
  }, [pathname])

  return (
    <div>
      <MultiWallet open={walletOpen} setOpen={setOpen} />
      <WalletDetail open={selectedWallet} setOpen={setWalletConnectOpen} openWalletType={openWalletType} />
      <Provider />
      <ErrorModal />
        
          {wallet !== '' ? (
            <button onClick={() => setSelectedWallet(true)}>
              {wallet && wallet.substr(0, 6) + '...' + wallet.substr(wallet.length - 4)}
            </button>
          ) : (
            <button onClick={() => setWalletOpen(true)}>
              Connect wallet
            </button>
          )}
          
    </div>
  )
}

export default Header
