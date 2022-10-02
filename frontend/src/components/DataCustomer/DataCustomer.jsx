import React from 'react'
import {Table} from 'reactstrap'
import './dataCustomer.scss' 
import DataCustomerItem from '../DataCustomerItem/DataCustomerItem'

function DataCustomer() {
  return (
    <div className='data-customer'>
        <Table bordered>
  <thead>
    <tr>
      <th>
        STT
      </th>
      <th>
        ID
      </th>
      <th>
        Username
      </th>
      <th>
        Email
      </th>
      <th>
        Address
      </th>
      <th>
        CreatAt
      </th>
    </tr>
  </thead>
  <tbody>
    <DataCustomerItem/>
    <DataCustomerItem/>
    <DataCustomerItem/>
    <DataCustomerItem/>
    <DataCustomerItem/>
   
   
    
  </tbody>
</Table>
    </div>
  )
}

export default DataCustomer