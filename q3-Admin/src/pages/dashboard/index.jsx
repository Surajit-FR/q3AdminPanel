import React from 'react'
import Kpicard from '../../components/dashboard/Kpicard'
import Header from '../../components/shared/header/Header'
import Linechart from '../../components/dashboard/line-chart'
import Barchart from '../../components/dashboard/Bar-chart'
import Piechart from '../../components/dashboard/Pie-chart'
import Registeredtable from '../../components/dashboard/Registered-table'
import Performercard from '../../components/dashboard/Performer-card'
import Topcountries from '../../components/dashboard/Top-countries'


const Dashboard = () => {
  return (
    <div className='das_sider'>
      <Header heading="Dashboard" subHeading="AI"/>
      <Kpicard/>
      <div className='row mt-3'>
        <Linechart/>
        <Barchart/>
        <Piechart/>
      </div>
      <div className='row mt-3'>
        <Registeredtable/>
        <Performercard/>
      </div>
      
      <div className='row mt-3'>
          <Topcountries/>
      </div>
      


    </div>
  )
}

export default Dashboard
