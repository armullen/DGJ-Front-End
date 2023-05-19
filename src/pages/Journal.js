import Monthly from '../components/Monthly';

function Journal () {
    return (
        <>
        <Monthly />
        <h1>Welcome to your garden journal!</h1>
        <h4>Use this space to make notes about your garden, keep track of what works and what doesn't and what you plan to do next! The more the better. And just like you, it gets better every year!</h4>
        <img className= "zinnias" src="/assets/zinnias.jpeg" alt='zinnias' /> 
        </>
    )
}

export default Journal;