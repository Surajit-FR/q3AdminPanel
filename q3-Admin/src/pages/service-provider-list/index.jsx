import React from 'react'
import Serviceprovider from '../../components/service-provider-list/Serviceprovider'
import Header from '../../components/shared/header/Header'

const Serviceproviderlist
 = () => {
  return (
    <div>
      <Header heading="Service Providers" subHeading="list"/>

      <Serviceprovider/>
    </div>
  )
}

export default Serviceproviderlist
