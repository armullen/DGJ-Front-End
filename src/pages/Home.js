import { Link } from 'react-router-dom'

function Home () {
    return(
        <div className="homePage">
            <div className="homeBox1">
                <img className= "peaceFlower" src="/assets/peaceFlower.jpeg" alt='peace flower' /> 
                <div className="text1">
                <h3 className="boxOneTitle">Welcome to My Digital Garden Journal</h3>
                <h4 className="textBox1">We're glad you're here! MDGJ is a sustainable way to chronical your gardens journey!  Keep track of the progress you make on your garden space and keep resources you find helpful all in one convenient place!</h4> 
                <button>Log In</button><button>Sign Up</button>
                </div>
            </div>
            <div className="homeBox2">
                <h5 className='textBox2'>See what's inside...</h5>
                <div className='box2Images'>
                    <img className= "sleepyBee" src="/assets/sleepyBee.jpeg" alt='sleepy bee' /> 
                    <img className= "seedlings" src="/assets/seedlings.jpeg" alt='pepper seedlings' /> 
                    <img className= "sunflowers" src="/assets/sunflowers.jpeg" alt='sunflowers' />
                </div>
                
                    <Link to='/journal'>Garden Journal </Link>
                    <Link to='/plantlist'>My Plants </Link>
                    <Link to='/mygarden'>My Garden </Link>

                
            </div>
            <div className="homeBox3">
                <img className= "peachtree" src="/assets/PeachBlossom.jpeg" alt='peachtree' /> 
                <div className="text3">
                <h3 className="boxOneTitle">Why journal my garden?</h3>
                <h4 className="textBox3">Journaling your garden every year is a great way to notice trends, keep track of what you have tried, and what works, and what you would like to try in the future.  Journaling your garden also keeps a record you can look back on and add to create a beautiful guide to caring for your growing space.</h4> 
                </div>
            </div>
        </div>
    )
}

export default Home;