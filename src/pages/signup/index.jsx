import React from 'react'
import Leftsection from '../../components/signup/Left-section'
import Rightsection from '../../components/signup/right-section'


const Signup = () => {
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

export default Signup
