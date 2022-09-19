import React from 'react'
import './passpop.scss';

const Passpop = (props) => {
    return (
        <>
            <div className='Popcon'>
              <button className='cross' onClick={()=>{props.fun(false)}}>X</button>
                <div className='popbox'>
                    <h5>Change Your Password</h5>
                    <section>Old Password</section>
                    <input type="password" name="pass" placeholder='Enter your password' />

                    <section>New Password</section>
                    <input type="password" name="pass" placeholder='Enter your password' />

                    <section>Confirm Password</section>
                    <input type="password" name="pass" placeholder='Enter your password' />

                   <div> <button className='btn btn-primary'>Change Password</button> </div>
                </div>
            </div>
        </>
    )
}

export default Passpop