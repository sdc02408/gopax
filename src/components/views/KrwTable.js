import React from 'react';
import {StarOutlined} from "@ant-design/icons";
import '../../static/sass/components/IndexPage.scss'
function KrwTable (props) {


 return(
      <div>
          {props.finalData && props.finalData.filter(names => names.quoteAsset.includes('KRW')).map(AllCoin => (
              <tr className="SortableMarketTableTr">
                  <td className="SortableMarketTable__favoriteCell"
                      style={{color: 'white', fontSize: '20px'}}><StarOutlined/></td>
                  <td className="SortableMarketTable__coinNameCell "style={{color: 'white', fontSize: '20px'}}> {AllCoin.nameKor}
                      <div>
                          {AllCoin.idCommon}/{AllCoin.quoteAsset}
                      </div>
                  </td>

                  <td className="SortableMarketTable__lastPriceCell SortableTable__align--right"
                      style={{color: 'white', fontSize: '20px'}}>{AllCoin.close.toLocaleString()}</td>

                  <td className="SortableMarketTable__contrastCell SortableTable__align--right "
                      style={{color: 'white', fontSize: '20px'}}>{AllCoin.high.toLocaleString()}</td>
                  <td className="SortableTable__align "
                      style={{color: 'white', fontSize: '20px'}}>{AllCoin.low.toLocaleString()}</td>

                  {Math.round(AllCoin.volume) > 9999 ?


                      <td className="SortableMarketTable__quoteVolumeCell SortableTable__align--right "
                          style={{color: 'white', fontSize: '20px'}}>{Math.round(AllCoin.volume/1000)}백만</td>
                      :
                      <td className="SortableMarketTable__quoteVolumeCell SortableTable__align--right "
                          style={{color: 'white', fontSize: '20px'}}>{Math.round(AllCoin.volume)}만</td>

                  }



              </tr>

          ))}
      </div>
  )
}


export default KrwTable
