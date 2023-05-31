import { Link } from 'react-router-dom'

function Monthly () {
    return (
        <div className='monthlyDiv'>
            <nav className='journalNav'>
                <div className='monthDiv' id='januaryTab'>
                    <Link className='monthLink' to='/january'>January</Link>
                </div>
                <div className='monthDiv' id='februaryTab'>
                    <Link className='monthLink' to='/february'>February</Link>
                </div>
                <div className='monthDiv' id='marchTab'>
                    <Link className='monthLink' to='/march'>March</Link>
                </div>
                <div className='monthDiv' id='aprilTab'>
                    <Link className='monthLink' to='/april'>April</Link>
                </div>
                <div className='monthDiv' id='mayTab'>
                    <Link className='monthLink' to='/may'>May</Link>
                </div>
                <div className='monthDiv' id='juneTab' >
                    <Link className='monthLink' to='/june'>June</Link>
                </div>
                <div className='monthDiv' id='julyTab' >
                    <Link className='monthLink' to='/july'>July</Link>
                </div>
                <div className='monthDiv' id='augustTab' >
                    <Link className='monthLink' to='/august'>August</Link>
                </div>
                <div className='monthDiv' id='septemberTab'>
                    <Link className='monthLink' to='/september'>September</Link>
                </div>
                <div className='monthDiv' id='octoberTab'>
                    <Link className='monthLink' to='/october'>October</Link>
                </div>
                <div className='monthDiv' id='novemberTab' >
                    <Link className='monthLink' to='/november'>November</Link>
                </div>
                <div className='monthDiv' id='decemberTab'>
                    <Link className='monthLink' to='/december'>December</Link>
                </div>
            </nav>
        </div>
    )
}

export default Monthly;