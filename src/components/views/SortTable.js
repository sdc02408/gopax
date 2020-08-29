import React from 'react'
import '../../static/sass/components/SortTable.scss'
import {StarOutlined} from '@ant-design/icons'
function SortTable (props) {
console.log(props.idCommon,"porpsropsrops")

  return(
    
    
      <tr className="SortTableRow">

        <td className="SortableMarketTable__favoriteCell" style={{color: 'white',fontSize: '20px'}}><StarOutlined /></td>
        <td className="SortableMarketTable__coinNameCell "> {props.nameKor}
          <div>
           {props.idCommon}/{props.quoteAsset}
          </div>
        </td>
  
       
        <td className="SortableMarketTable__lastPriceCell SortableTable__align--right "
            style={{ color: 'white', fontSize: '20px' }}>{props.close.toLocaleString()}</td>
        
        
        <td className="SortableMarketTable__contrastCell SortableTable__align--right "style={{color: 'white',fontSize: '20px'}}>{props.high.toLocaleString()}</td>
        <td className="SortableTable__align " style={{color: 'white',fontSize: '20px'}}>{props.low.toLocaleString()}</td>
        <td className="SortableMarketTable__quoteVolumeCell SortableTable__align--right " style={{color: 'white',fontSize: '20px'}}>{props.volume.toLocaleString()}</td>
      

      </tr>

  )

  }

export default SortTable
