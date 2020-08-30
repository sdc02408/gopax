import React, {useState} from 'react'
import '../../static/sass/components/SortTable.scss'
import {StarOutlined} from '@ant-design/icons'
function SortTable (props) {
// console.log(props.quoteAsset,"qutoeAsset멜라딘")
//     const onlyQuoteAsset = () => {
//         console.log(props.quoteAsset.length,"quoteasset")
//         let quoteAseetArr = [];
//         // if(var i =0 ; i < props.quoteAsset.length;i++){
//         //     console.log(quoteAseetArr,"배열이다")
//         // }
//
//     }
//
//     onlyQuoteAsset()
//     const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
//     {names.filter(name => name.includes('J')).map(filteredName => (
//
//         console.log({filteredName},"ssssss")
//
//     ))}

    // const siba = props.quoteAsset;
    // let sibaArr = [];
    // for(let i =0; i<siba.length; i++ ) {
    //     if(siba == "BTC"){
    //         let xx = {
    //
    //         }
    //         sibaArr.push()
    //     }
    //
    // }
    // console.log(sibaArr,"sibaKRW")

    return(

      <tr className="SortTableRow">
        <td className="SortableMarketTable__favoriteCell" style={{color: 'white',fontSize: '20px'}}><StarOutlined /></td>
        <td className="SortableMarketTable__coinNameCell " style={{color: 'white',fontSize: '20px'}}> {props.nameKor}
          <div>
           {props.idCommon}/{props.quoteAsset}
          </div>
        </td>
        <td className="SortableMarketTable__lastPriceCell SortableTable__align--right "
            style={{ color: 'red', fontSize: '20px' }}>{props.close.toLocaleString()}</td>
        <td className="SortableMarketTable__contrastCell SortableTable__align--right "style={{color: 'white',fontSize: '20px'}}>{props.high.toLocaleString()}</td>
        <td className="SortableTable__align " style={{color: 'white',fontSize: '20px'}}>{props.low.toLocaleString()}</td>
        <td className="SortableMarketTable__quoteVolumeCell SortableTable__align--right " style={{color: 'white',fontSize: '20px'}}>{props.volume.toLocaleString()}</td>
      </tr>

  )

  }

export default SortTable
