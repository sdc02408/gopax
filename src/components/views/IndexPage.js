import React, { useEffect, useState } from 'react'
import '../../static/sass/components/IndexPage.scss'

function IndexPage (props) {
  
  return (
    <div>
      
        <table className=" SortableMarketTable ">
          <thead>
          <tr>
            <th className="SortableMarketTable__favoriteCell"></th>
            <th className="SortableMarketTable__coinNameCell">이름</th>
            <th className="SortableMarketTable__lastPriceCell">현재가</th>
            <th className="SortableTable__align--right">최고가</th>
            <th className="SortableTable__align--right">최저가</th>
            <th className="SortableMarketTable__quoteVolumeCell ">거래대금</th>
          </tr>
          </thead>
          
          
        </table>
    
    </div>
  )
}

export default IndexPage
