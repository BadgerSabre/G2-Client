import './Login.css'

const Login = () => {

    return (
        <div className='login-box'>
            <form id='loginForm'>
                <div className='user-box'>
                    <input id='userid' type="text" name='userid' />
                    <label htmlFor='userid'>ID Number</label>
                </div>
                <div className='user-box'>
                    <input id='password' type="password" name='password' />
                    <label htmlFor='password'>Password</label>
                </div>
                <a href='/'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </a>
            </form>
        </div>
    )
}

export default Login;