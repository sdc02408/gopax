import React from 'react';
import {StarOutlined} from "@ant-design/icons";

function Table (props) {
  return(
      <div>
          {props.finalData && props.finalData.filter(names => names.quoteAsset.includes('KRW')).map(AllCoin => (
              <tr className="SortTableTr">
                  <td className="SortableMarketTable__favoriteCell"
                      style={{color: 'white', fontSize: '20px'}}><StarOutlined/></td>
                  <td className="SortableMarketTable__coinNameCell "style={{color: 'white', fontSize: '20px'}}> {AllCoin.nameKor}
                      <div>
                          {AllCoin.idCommon}/{AllCoin.quoteAsset}
                      </div>
                  </td>
                  <td className="SortableMarketTable__lastPriceCell SortableTable__align--right"
                      style={{color: 'red', fontSize: '20px'}}>{AllCoin.close.toLocaleString()}</td>
                  <td className="SortableMarketTable__contrastCell SortableTable__align--right "
                      style={{color: 'white', fontSize: '20px'}}>{AllCoin.high.toLocaleString()}</td>
                  <td className="SortableTable__align "
                      style={{color: 'white', fontSize: '20px'}}>{AllCoin.low.toLocaleString()}</td>
                  <td className="SortableMarketTable__quoteVolumeCell SortableTable__align--right "
                      style={{color: 'white', fontSize: '20px'}}>{AllCoin.volume}</td>
              </tr>

          ))}
      </div>
  )
}


export default Table
