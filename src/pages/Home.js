import PeachBlossom from '.../assets/PeachBlossom';

function Home () {
    return(
        <div className="homePage">
            <img src={PeachBlossom} alt='peachtree'/>
        <h1>My Digital Garden Journal</h1>
        <button className='logIn'>Log In</button>
        <button className='signUp'>Sign Up</button>
        </div>
    )
}

export default Home;