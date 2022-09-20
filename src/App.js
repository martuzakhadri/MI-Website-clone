import PreNavbar from './compoenets/PreNavbar'
import NavBar from './compoenets/NavBar';
import './App.css';
import { BrowserRouter as Router, Route  } from "react-router-dom"
import Slider from './compoenets/Slider';
import data from "./data/data.json"
import Offers from './compoenets/Offers';
import Header from './compoenets/Header';
import StarProduct from './compoenets/StarProduct';
import HotAcessoriesMenu from './compoenets/HotAcessoriesMenu';
import HotAcessories from './compoenets/HotAcessories';
import ProductRreviews from './compoenets/ProductRreviews';
import Videos from './compoenets/Videos'
import Banner from './compoenets/Banner'
import Footer from './compoenets/Footer'
import NavOptions from './compoenets/NavOptions'


function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home}/>


      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Header text="STAR PRODUCTS" />
      <StarProduct StarProduct={data.starProduct} />
      <Header text="HOT ACCESSORIES MENU" />
      <HotAcessoriesMenu />
      
        <Route exact path="/music">
          <HotAcessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
        </Route>
        <Route exact path="/SmartDevice">
          <HotAcessories smartDevices={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />
        </Route>
        <Route exact path="/Home">
          <HotAcessories Home={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />
        </Route>
        <Route exact path="/LifeStyle">
          <HotAcessories LifeStyle={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />
        </Route>
        <Route exact path="/MobileAccessories">
          <HotAcessories MobileAccessories={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />
        </Route>
        <Header text="PRODUCT REVIEWS" />
        <ProductRreviews ProductRreviews={data.productReviews} />
        <Header text="PRODUCT VIDEOS" />
         <Videos videos={data.videos} />
         <Header text="IN THE PRESS" />
        <Banner  banner={data.banner}/>
        <Footer footer={data.footer} />
    </Router>
    




  );
}

export default App;
