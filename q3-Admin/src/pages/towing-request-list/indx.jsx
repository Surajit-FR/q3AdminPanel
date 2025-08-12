import React from 'react'
import Towingrequest from '../../components/towing-request-list/Towing-request'
import Header from '../../components/shared/header/Header'

const Towingrequestlist = () => {
  return (
    <div>
      <Header heading="Service Requests" subHeading="list"/>
      <Towingrequest/>
    </div>
  )
}

export default Towingrequestlist
