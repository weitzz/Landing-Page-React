import React,{useState} from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo,homeObjThree, homeObjFour} from '../components/InfoSection/Data'




const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle =() =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
           
        </div>
    )
}

export default Home
