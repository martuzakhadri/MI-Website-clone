import React from 'react'
import HotItemCard from '../compoenets/HotItemCard'
import '../styles/HotAccessories.css'

const HotAcessories = ({ music, musicCover ,smartDevices,smartDeviceCover,Home,HomeCover,LifeStyle,LifeStyleCover,MobileAccessories,MobileAccessoriesCover}) => {
    return (
        <div className='HotAccessories'>
            <div>
                <img src={musicCover || smartDeviceCover ||HomeCover || LifeStyleCover ||MobileAccessoriesCover} alt="cover"/>
            </div>
            {/*---------2nd --------*/}
            <div>
            
            {
                music && music.map((item,index)=>(
                <HotItemCard  key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            {
                smartDevices &&  smartDevices.map((item,index)=>(
                <HotItemCard  key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            {
                Home &&  Home.map((item,index)=>(
                <HotItemCard  key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            {
                LifeStyle &&  LifeStyle.map((item,index)=>(
                <HotItemCard  key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            {
                MobileAccessories &&  MobileAccessories.map((item,index)=>(
                <HotItemCard  key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" alt=""/>
            </div>

        </div>

    )
}

export default HotAcessories