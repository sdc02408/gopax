import React, {useState} from 'react'
import '../../static/sass/components/IndexPage.scss'
import '../../static/sass/components/SortTable.scss'
import {StarOutlined} from '@ant-design/icons'

import Tables from './Table'
import BTable from './Btable'
import ClostTable from './ClostTable'
import {fetchAssetsData} from "../../actions/actions";
import { Table,Tabs  } from 'antd';
const { TabPane } = Tabs;


function BtcTable(props) {
    // console.log(props.finalData, "통째로 다준거야")

    // const [changeKrwBtc, setChangeKrwBtc] = useState(true)
    //KRW, BTC 탭으로 분류
    const [changeKrw, setChangeKrw] = useState(true)
    const [changeBtc, setChangeBtc] = useState(false)

    //분류하기
    const [a, setA] = useState([])
    const [z, setZ] = useState([])
    //table 정렬 토글
    const [isToggled, setToggled] = useState(false);
    const [btcToggle, setBtcToggle] = useState(true)

    const columns = [
        {
            title: '이름',
            dataIndex: 'nameKor',
            sorter: {
                compare: (a, b) => a.nameKor - b.nameKor,

            },
        },
        {
            title: '현재가',
            dataIndex: 'close',
            sorter: {
                compare: (a, b) => a.close - b.close,

            },
        },
        {
            title: '최고가',
            dataIndex: 'high',
            sorter: {
                compare: (a, b) => a.high - b.high,
                multiple: 1,
            },
        },
        {
            title: '최저가',
            dataIndex: 'low',
            sorter: {
                compare: (a, b) => a.low - b.low,
                multiple: 1,
            },
        },
        {
            title: '거래대금',
            dataIndex: 'volume',
            sorter: {
                compare: (a, b) => a.volume - b.volume,
                multiple: 1,
            },
        },
    ];

    const dataa = [];
    {
        props.finalData && props.finalData.filter(names => names.quoteAsset.includes('KRW')).map(AllC => (
            dataa.push(AllC)
        ))
    }

    const dd = [];
    {
        props.finalData && props.finalData.filter(names => names.quoteAsset.includes('BTC')).map(AllC => (
            dd.push(AllC)
        ))
    }

    let reference = [];

    const onClickFavorite = () => {
        // setChangeKrw(true)
        // setChangeBtc(false);
        console.log('tlqkljklk')
    }

    const onClickKrw = () => {
        setChangeKrw(false)
        setChangeBtc(true);
    }

    const toggleTrueFalse = () => {

        if (isToggled) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)

                ))
            }
            reference.sort(function (u, b) { // 오름차순
                return u.high < b.high ? -1 : u.high > b.high ? 1 : 0;

            });

            // setChangeKrw(false)
            // setChangeBtc(false);
            setA(reference)

        }  else  {

            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))

            reference.sort(function (u, b) { // 오름차순

                return u.high > b.high ? -1 : u.high < b.high ? 1 : 0;

            });

            setA(reference)
        }

        setToggled(!isToggled)
        console.log(isToggled, 'hihih')
        console.log(a, "aaaaaaaaaahghg")
    }


    const onClickBtc = () => {

    }

    //sorting
    const onClickSortName = () => {

    }

    return (

        <div>

            <Tabs defaultActiveKey="1" className="SelectTab SelectTabFilter">

                <TabPane tab="관심" key="1" >
                    <BTable finalData={props.finalData}/>
                </TabPane>

                <TabPane tab="KRW" key="2" type={{card}}>
                    <thead>
                    <tr className="SortableMarketTable ">
                        <th className="SortableMarketTable__favoriteCell">j</th>
                        <th className="SortableMarketTable__coinNameCell" onClick={onClickSortName}>이름</th>
                        <th className="SortableMarketTable__lastPriceCell" onClick={toggleTrueFalse} >현재가</th>
                        <th className="SortableTable__align--right">최고가</th>
                        <th className="SortableTable__align--right">최저가</th>
                        <th className="SortableMarketTable__quoteVolumeCell ">거래대금</th>
                    </tr>
                    </thead>
                    { isToggled ?
                        <Tables finalData={a}/>
                        :
                        <Tables finalData={a}/>
                        }

                </TabPane>

                <TabPane tab="BTC" key="3">
                    <thead>
                    <tr className="SortableMarketTable ">
                        <th className="SortableMarketTable__favoriteCell">j</th>
                        <th className="SortableMarketTable__coinNameCell" onClick={onClickSortName}>이름</th>
                        <th className="SortableMarketTable__lastPriceCell" onClick={toggleTrueFalse} >현재가</th>
                        <th className="SortableTable__align--right">최고가</th>
                        <th className="SortableTable__align--right">최저가</th>
                        <th className="SortableMarketTable__quoteVolumeCell ">거래대금</th>
                    </tr>
                    </thead>

                    { isToggled ?
                        <BTable finalData={a}/>
                        :
                        <BTable finalData={a}/>
                    }
                </TabPane>
            </Tabs>


            {/*<div className="SelectTab">*/}
            {/*    <div className="SelectTabFilter">*/}
            {/*        <button className="SelectableMarketFilters" onClick={onClickFavorite}>관심</button>*/}
            {/*        <button className="SelectableMarketFilters" onClick={onClickKrw}>KRW</button>*/}
            {/*        <button className="SelectableMarketFilters" onClick={onClickBtc}>BTC</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<table className=" SortableMarketTable ">*/}

            {/*    <thead>*/}
            {/*    <tr className="SortableMarketTable SortableMarketTableTr">*/}
            {/*        <th className="SortableMarketTable__favoriteCell">j</th>*/}
            {/*        <th className="SortableMarketTable__coinNameCell" onClick={onClickSortName}>이름</th>*/}
            {/*        <th className="SortableMarketTable__lastPriceCell" onClick={toggleTrueFalse} >현재가</th>*/}
            {/*        <th className="SortableTable__align--right">최고가</th>*/}
            {/*        <th className="SortableTable__align--right">최저가</th>*/}
            {/*        <th className="SortableMarketTable__quoteVolumeCell ">거래대금</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}

            {/*    <tbody>*/}

                {/*{changeKrw ?*/}
                {/*    <Tables finalData={props.finalData} />*/}
                {/*    :*/}
                {/*    //<BTable finalData={props.finalData} />*/}
                {/*    null*/}
                {/*}*/}

            {/*    {changeBtc ?*/}
            {/*        <BTable finalData={props.finalData}/>*/}
            {/*        :*/}
            {/*        null*/}
            {/*    }*/}

            {/*    { isToggled ?*/}
            {/*        <Tables finalData={a}/>*/}
            {/*        :*/}
            {/*        <Tables finalData={a}/>*/}


            {/*    }*/}





            {/*    </tbody>*/}
            {/*</table>*/}
        </div>
    )
}

export default BtcTable
