import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotaccessoriesMenu.css'

const HotAcessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
    <Link className='HotAccessoriesLink' to="/music">Music Store</Link>
    <Link className='HotAccessoriesLink' to="/SmartDevice">Smart Devices</Link>
    <Link className='HotAccessoriesLink' to="/Home">Home</Link>
    <Link className='HotAccessoriesLink' to="/LifeStyle">LifeStyle</Link>
    <Link className='HotAccessoriesLink' to="/MobileAccessories">MobileAccessories</Link>
    
    
    </div>
  )
}

export default HotAcessoriesMenu