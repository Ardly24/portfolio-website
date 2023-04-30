import Ract from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Work from "../components/Work"
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home(){
    return(
       <div>
        <Navbar />
        <HeroImg />
        <Work />
        <ContactForm />
        <Footer />
       </div>
    )
}