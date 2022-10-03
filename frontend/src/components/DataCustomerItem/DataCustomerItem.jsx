import React from 'react'
import './dataCustomerItem.scss'
import Action from '../Action/Action'

function DataCustomerItem() {
  return (
    <tr>
    <th scope="row">
      1
    </th>
    <td>
      110
    </td>
    <td>
      Mạnh Cường
    </td>
    <td>
      Cuong@gmail.com
    </td>
    <td>
      0961952343
    </td>
    <td>
      Đà Nẵng
    </td>
    <td>
      03/10/2022
    </td>
    <td>
      <Action/>
    </td>
  </tr>
  )
}

export default DataCustomerItem