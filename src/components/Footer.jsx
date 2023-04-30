import "./FooterStyles.css"
import {BsFillHeartFill} from 'react-icons/bs'
const Footer = () =>{

    const today = new Date()
    let year = today.getFullYear();

    return(
        <footer>
            <h4> &copy; {year} ardly-tech.com</h4>
            <h4>Made with <BsFillHeartFill  color="red" size='1rem'/> using React</h4>
        </footer>
    )
}

export default Footer