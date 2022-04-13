import React from 'react'
//  { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import MultiWallet from '../../Modals/ConnectWallet'

function DashComponent() {
  // const [walletOpen, setWalletOpen] = useState(false)
  // const address = useSelector((store) => store.wallet.walletAddress)

  // useEffect(() => {
  //   if (address !== '') {
  //     setOpen()
  //   }
  // }, [address])

  // function setOpen() {
  //   setWalletOpen(false)
  // }

  return (
    <div>
      {/* <MultiWallet open={walletOpen} setOpen={() => setOpen()} /> */}
      <div>
      <h1 className="text-9xl font-bold underline">
      Hello world!
    </h1>
    </div>
    </div>
  )
}

export default DashComponent
