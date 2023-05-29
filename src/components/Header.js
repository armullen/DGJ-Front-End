import { Link } from 'react-router-dom'
import NavBar from './NavBar.js';

function Header () {
    return(
        <div className='header'>
            <nav className='navBar'>  
                <img className= "logo" src="/assets/logo.png" alt='logo' /> 
                <NavBar />
                <div className='socials'>
                    <img className= "socials" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjM_OHGXZBTgOiP6dydlO5GFoW6NpEKYRMw&usqp=CAU" alt='fblogo' /> 
                    <img className= "socials" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdESIwbdDOqAotPTForHEWRctGCj0chWypKw&usqp=CAU" alt='fblogo' /> 
                </div>                   
            </nav>
        </div>
    )
}

export default Header;