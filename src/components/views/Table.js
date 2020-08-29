import React from 'react';

function Table () {
  return(
    <tr>
      <th className="SortableMarketTable__favoriteCell"> </th>
      <th className="SortableMarketTable__coinNameCell">이름</th>
      <th className="SortableMarketTable__lastPriceCell">현재가</th>
      <th className="SortableMarketTable__contrastCell">변동</th>
      <th className="SortableTable__align--right">최고가</th>
      <th className="SortableTable__align--right">최저가</th>
      <th className="SortableMarketTable__quoteVolumeCell ">거래대금</th>
    </tr>
  )
}

export default Table
