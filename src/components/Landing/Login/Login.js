import { useState } from 'react';
import './Login.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { verifyLogin } from '../../../actions/login';
import { directory } from '../../../lib/page_directory';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({id_num: "", password: ""}) 
    
    const handleLogin = (e) => {
        e.preventDefault()
        loginStatus()
        console.log(userData)
    }
    
    const loginStatus = () => {
        dispatch(verifyLogin(userData)).then( (data) => {
            const dir = data.accessToken && directory(data.wc_id)
            return data.accessToken ? navigate(dir, { state: { user: data } } ) : null;
        })
    }
    
    return (
        <div className='login-box'>
            <form id='loginForm' onSubmit={handleLogin}>
                <div className='user-box'>
                    <input id='userid' type="text" name='userid' onChange={(e) => setUserData({...userData, id_num: e.target.value})} />
                    <label htmlFor='userid'>ID Number</label>
                </div>
                <div className='user-box'>
                    <input id='password' type="password" name='password' onChange={(e) => setUserData({...userData, password: e.target.value})} />
                    <label htmlFor='password'>Password</label>
                </div>
                <a href='/'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                </a>
                <button type='submit' className='d-none'></button>
            </form>
        </div>
    )
}

export default Login;