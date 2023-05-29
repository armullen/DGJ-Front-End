import Monthly from '../components/Monthly';

function Journal () {
    return (
        <>
        <h1 className='journalHeader'>Welcome to your garden journal</h1>
        <div className='journalHome'>
        <div className='journalHomeTwo'>
        <Monthly />
        <h4 className='journalText'>Use this space to make notes about your garden, keep track of what works and what doesn't and what you plan to do next! The more the better. And just like you, it gets better every year!</h4>
        <h1>Click the month here to get started</h1>
        <div class="arrow"></div>
        </div>
        </div>
        </>
    )
}

export default Journal;