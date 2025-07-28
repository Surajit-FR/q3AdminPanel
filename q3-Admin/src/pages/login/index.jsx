import React from 'react'
import Leftsection from '../../components/login/Left-section'
import Rightsection from '../../components/login/Right-section'
const Login = () => {
  return (
    <div className='bg-base_2'>
        <div className='container-fluid'>
            <div className='row'>
                <Leftsection/>
                <Rightsection/>
            </div>
        </div>
    </div>
  )
}

export default Login
