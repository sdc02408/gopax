import React, {useState} from 'react'
import '../../static/sass/components/SortTable.scss'
import {StarOutlined} from '@ant-design/icons'
import '../../static/sass/components/IndexPage.scss'
import Table from './Table'
import BTable from './Btable'


function BtcTable(props) {
    console.log(props.finalData, "통째로 다준거야")

    const [changeKrwBtc, setChangeKrwBtc] = useState(true)
    const [a, setA] = useState(false)

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => {

        if (isToggled) {
            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)

                ))
            }
            reference.sort(function (u, b) { // 오름차순
                return u.high < b.high ? -1 : u.high > b.high ? 1 : 0;
                // if(u.high < b.high) {
                //     return a.direction === 'descending' ? 1 : -1;
                // }
                //  if (u.high > b.high) {
                //      return a.direction === 'descending' ? -1 : 1;
                //  }
            });

            setA(reference)
        } else {
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))

        reference.sort(function (u, b) { // 오름차순
            // return u.high < b.high ? -1 : u.high > b.high ? 1 : 0;
            if (u.high < b.high) {
                return a.direction === 'ascending' ? -1 : 1;
            }
            if (u.high > b.high) {
                return a.direction === 'ascending' ? 1 : -1;
            }
        });

        setA(reference)

    }

        setToggled(!isToggled)
            console.log(isToggled,'hihih')
        console.log(a,"aaaaaaaaaahghg")
    }

    const onClickFavorite = () => {
        setChangeKrwBtc(true)
    }

    const onClickKrw = () => {
        setChangeKrwBtc(false);
    }

    const onClickBtc = () => {
        console.log('시발')
    }
    let reference = [];

    //sorting
    const onClickSortName = () => {



        {props.finalData && props.finalData.map(AllCon => (
            reference.push(AllCon)

        )) }
        reference.sort(function(u, b) { // 오름차순
            return u.high < b.high ? -1 : u.high > b.high ? 1 : 0;
           // if(u.high < b.high) {
           //     return a.direction === 'descending' ? 1 : -1;
           // }
           //  if (u.high > b.high) {
           //      return a.direction === 'descending' ? -1 : 1;
           //  }
        });

        setA(reference)
        console.log(a,"aaaaaaaaaahghg")


    }


    // props.finalData(function (a,b) {
    //     return a.nameKo < b.nameKo ? -1 : a.nameKo > b.nameKo ? 1 : 0;
    // })

    return (

        <div>

            <div className="SelectTab">
                <div className="SelectTabFilter">
                    <button className="SelectableMarketFilters" onClick={onClickFavorite}>관심</button>
                    <button className="SelectableMarketFilters" onClick={onClickKrw}>KRW</button>
                    <button className="SelectableMarketFilters" onClick={onClickBtc}>BTC</button>
                </div>
            </div>

            <table className=" SortableMarketTable ">

                <thead>
                <tr className="SortableMarketTableTr">
                    <th className="SortableMarketTable__favoriteCell">j</th>
                    <th className="SortableMarketTable__coinNameCell" onClick={onClickSortName}>이름</th>
                    <th className="SortableMarketTable__lastPriceCell" onClick={toggleTrueFalse}>현재가</th>
                    <th className="SortableTable__align--right">최고가</th>
                    <th className="SortableTable__align--right">최저가</th>
                    <th className="SortableMarketTable__quoteVolumeCell ">거래대금</th>
                </tr>
                </thead>

                <tbody>

                {changeKrwBtc ?
                    <Table finalData={props.finalData}/>
                    :
                    <BTable finalData={props.finalData} />
                }

                {isToggled ?

                    <Table finalData={a}  />

                    :
                    <BTable finalData={a} />
                }





                </tbody>
            </table>
        </div>
    )
}

export default BtcTable
