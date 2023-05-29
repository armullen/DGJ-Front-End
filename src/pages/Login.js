import { Link } from 'react-router-dom'

function Login () {
    return (
        <>
        <h1>Welcome back!</h1>
            <form>
                <label>E-Mail</label>
                <input type='email' name='email'  placeholder="email"/>
                <label>Password:</label>
                <input type='text' name='password'  placeholder="password"/>
                <button>Submit</button>
            </form>

        <h2>Dont have an account? We're happy you're here!</h2>
            <div className='logInButtons'>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}

export default Login;