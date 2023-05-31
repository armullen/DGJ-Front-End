import Monthly from '../components/Monthly';
import GardenNotes from "../components/GardenNotes";

function Journal () {
    return (
        <>
        <h1 className='journalHeader'>Welcome to your garden journal</h1>
        <div className='journalHome'>
        <div className='journalHomeTwo'>
        <Monthly />
        <h4 className='journalText'>Use this space to make notes about your garden, keep track of what works and what doesn't and what you plan to do next! Document EVERYTHING. Because just like you, it gets better every year!</h4>
        <GardenNotes />
        
        </div>
        </div>
        </>
    )
}

export default Journal;