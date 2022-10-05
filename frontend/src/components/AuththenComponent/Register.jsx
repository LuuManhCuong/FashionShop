import './authen.scss'


function register() {
  return (
    <div className='register'>
       <div className='text1'>
            <span className='text-login'>Sign Up</span>
            <p className='text-enter'>Create your account to get full access</p>
       </div>
       <div className='input-box'>
            <div className='single-input-fields'>
                <label>Full Name</label> <br />
                <input className='input' type="text" placeholder="Enter fullname"></input>
            </div>
            <div className='single-input-fields'>
                <label>Email Address</label> <br />
                <input className='input' type="text" placeholder="Enter email address"></input>
            </div>
            <div className='single-input-fields'>
                <label>Password</label> <br />
                <input className='input' type="password" placeholder="Enter password"></input>
            </div>
            <div className='single-input-fields'>
                <label>Confirm Password</label> <br />
                <input className='input' type="password" placeholder="Confirm Password"></input>
            </div>
            
       </div>
       <div className='login-footer'>
            <div className='left'>
                <p className='sign-up'>
                    <span className='dont'>Already have an account?</span>
                    <a className='signup' href="./login">Login</a> 
                    <span>here</span>
                </p>
            </div>

            <div className='right'>
                <button className='submit-btn3'>Sign Up</button>
            </div>
        
        
       </div>
    </div>
  )
}

export default register