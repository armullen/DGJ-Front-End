import { Link } from 'react-router-dom'

function Monthly () {
    return (
        <div className='monthlyDiv'>
            <nav className='journalNav'>
                <Link to='/january'>January</Link>
                <Link to='/february'>February</Link>
                <Link to='/march'>March</Link>
                <Link to='/april'>April</Link>
                <Link to='/may'>May</Link>
                <Link to='/june'>June</Link>
                <Link to='/july'>July</Link>
                <Link to='/august'>August</Link>
                <Link to='/september'>September</Link>
                <Link to='/october'>October</Link>
                <Link to='/november'>November</Link>
                <Link to='/december'>December</Link>
            </nav>
        </div>
    )
}

export default Monthly;