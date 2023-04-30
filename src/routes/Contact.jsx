import react from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

 export default function Contact(){
    return(
        <div>
            <Navbar />
            <HeroImg2 heading="Contact."
            text="Feel free to reach out if you want to build something together,
            have a question, or just want to connect."
            />
            <ContactForm />
            <Footer />
        </div>
    )
 }