import React from 'react';
import {StarOutlined} from "@ant-design/icons";

function BtcTable(props) {



    return (
        <div>
            {props.finalData && props.finalData
                .filter(names => names.quoteAsset.includes('BTC'))


                .map(AllCoin => (
                <tr className="SortableMarketTableTr">
                    <td className="SortableMarketTable__favoriteCell"
                        style={{color: 'white', fontSize: '20px'}}><StarOutlined/></td>
                    <td className="SortableMarketTable__coinNameCell "
                        style={{color: 'white', fontSize: '20px'}}> {AllCoin.nameKor}
                        <div>
                            {AllCoin.idCommon}/{AllCoin.quoteAsset}
                        </div>
                    </td>
                    <td className="SortableMarketTable__lastPriceCell SortableTable__align--right "
                        style={{color: 'white', fontSize: '20px'}}>{AllCoin.close.toFixed(8)}</td>
                    <td className="SortableMarketTable__contrastCell SortableTable__align--right "
                        style={{color: 'white', fontSize: '20px'}}>{AllCoin.high.toFixed(8)}</td>
                    <td className="SortableTable__align "
                        style={{color: 'white', fontSize: '20px'}}>{AllCoin.low.toFixed(8)}</td>

                    {AllCoin.volume < 14000000 ?
                        <td className="SortableMarketTable__quoteVolumeCell SortableTable__align--right "
                            style={{color: 'white', fontSize: '20px'}}>0BTC</td>
                        :

                        <td className="SortableMarketTable__quoteVolumeCell SortableTable__align--right "
                            style={{color: 'white', fontSize: '20px'}}>{AllCoin.volume}</td>
                    }
                </tr>

            ))}
        </div>
    )

}

export default BtcTable
