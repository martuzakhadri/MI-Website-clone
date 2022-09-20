import React ,{useState,useEffect} from 'react'
import NavCard from './NavCard'
import '../styles/NavOptions.css'


const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home}) => {
   //const [state,setstate] = useState(initialState)
   const [miPhoneToggle,setmiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setredmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);

   useEffect(()=>{
    if(window.location.pathname === "/miphones"){
        return  setmiPhoneToggle(true)
    }
    if(window.location.pathname === "/redmiphones"){
        return   setredmiPhoneToggle(true)
       }
       if(window.location.pathname === "/tv"){
        return   setTvToggle(true)
       }
       if(window.location.pathname === "/laptops"){
        return   setLaptopToggle(true)
       }
       if(window.location.pathname === "/lifestyle"){
        return  setFitnessToggle(true)
       }
       if(window.location.pathname === "/home"){
        return  setHomeToggle(true)
       }
  

   },[]
   )


    return (
        <div className='NavOptions'>
           { miPhoneToggle? miPhones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )):null}

           { redmiPhoneToggle? redmiPhones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )):null}

           { tvToggle ? tv.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )):null}

           { laptopToggle  ? laptop.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )):null}

           { fitnessToggle  ? fitnessAndLifeStyle.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )):null}

           { homeToggle  ? home.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )):null}


           


        </div>
    )
}

export default NavOptions