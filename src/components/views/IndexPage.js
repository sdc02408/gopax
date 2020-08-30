import React, { useEffect, useState } from 'react'
import '../../static/sass/components/IndexPage.scss'

function IndexPage (props) {

    const onClickFavorite =()=>{
        console.log('시발')
    }

    const onClickKrw =()=>{
        console.log('시발')
    }

    const onClickBtc =()=>{
        console.log('시발')
    }

    const onClickSortName = () => {
        console.log('정렬해봐라')
    }

  return (
    <div>

      <div className="SelectTab">
        <div className="SelectTabFilter">
        <div className="SelectableMarketFilters" onClick={onClickFavorite}>관심</div>
        <div className="SelectableMarketFilters" onClick={onClickKrw}>KRW</div>
        <div className="SelectableMarketFilters" onClick={onClickBtc}>BTC</div>
        </div>
      </div>

        <table className=" SortableMarketTable ">
          <thead>
          <tr>
            <th className="SortableMarketTable__favoriteCell"></th>
            <th className="SortableMarketTable__coinNameCell" onClick={onClickSortName}>이름</th>
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
