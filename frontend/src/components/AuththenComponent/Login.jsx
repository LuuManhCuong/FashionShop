import './authen.scss'


function Login() {
  return (
    <div className='Login'>
       <div className='text1'>
            <span className='text-login'>Login</span>
            <p className='text-enter'>Enter Login details to get access</p>
       </div>
       <div className='input-box'>
            <div className='single-input-fields'>
                <label>Username or Email Address</label> <br />
                <input className='input' type="text" placeholder="Username / Email address"></input>
            </div>
            <div className='single-input-fields'>
                <label>Password</label> <br />
                <input className='input' type="password" placeholder="Enter Password"></input>
            </div>
            <div className='single-input-fields login-check'>
                <input className='check-box' type="checkbox" id="fruit1" name="keep-log"></input>
                <label for="fruit1">
                    Keep me logged in
                </label> 
                <a href='/' className='f-right'>Forgot Password?</a>
            </div>
       </div>
       <div className='login-footer'>
            <div className='left'>
                <p className='sign-up'>
                    <span className='dont'>Don't have an account?</span>
                    <a className='signup' href="/register">Sign Up</a> 
                    <span>here</span>
                </p>
            </div>

            <div className='right'>
                <button className='submit-btn3'>Login</button>
            </div>
        
        
       </div>
    </div>
  )
}

export default Login