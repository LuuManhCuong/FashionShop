import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import "./revenue.scss"



const overview = [
    {
      title: "doanh thu",
      statistical: `$243.000`,
      subNum: `$36.000`,
      isIncrease: true,
      subTitle: "So với tháng trước",
    },
    {
      title: "Chi phí",
      statistical: `$121.000`,
      subNum: `$17.000`,
      isIncrease: false,
      subTitle: "So với tháng trước",
    },
    {
      title: "Lợi nhuận",
      statistical: `$122.000`,
      subNum: `${7}%`,
      isIncrease: true,
      subTitle: "So với tháng trước",
    },
  ];
function Revenue() {
  return (
    <div className='revenue'>
        <AdminHeader overview={overview}></AdminHeader>
        <div className="revenue-body">
            <h1>Biểu đồ</h1>
        </div>
    </div>
  )
}

export default Revenue