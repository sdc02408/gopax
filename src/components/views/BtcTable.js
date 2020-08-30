import React, {useState} from 'react'
import '../../static/sass/components/SortTable.scss'
import {StarOutlined} from '@ant-design/icons'
import SortTable from "./SortTable";
import SortTableMarket from "./SortTableMarket";
function BtcTable (props) {
console.log(props.finalData,"fdfdfdf")

    const [a,setA ] = useState('')

    const onClickFavorite =()=>{
        {props.finalData && props.finalData.filter(names => names.quoteAsset.includes('KRW')).map(AllCoin => (

            <th className="SortableMarketTable__favoriteCell">{AllCoin}</th>

        ))}

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
    return(

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

export default BtcTable
