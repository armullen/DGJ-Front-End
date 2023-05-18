import { Link } from 'react-router-dom'

function Header () {
    return(
        <div className='header'>
            <nav className='navBar'>
                <Link to='/'>Home </Link>
                <Link to='/journal'>Garden Journal </Link>
                <Link to='/plantlist'>My Plants </Link>
                <Link to='/mygarden'>My Garden </Link>
            </nav>
        </div>
    )
}

export default Header;