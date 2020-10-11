import React, {useState} from 'react'
import '../../static/sass/components/IndexPage.scss'


import KrwTable from './KrwTable'
import BtcTable from './BtcTable'
import {Tabs} from 'antd';

const {TabPane} = Tabs;


function IndexPage(props) {

    const [changeKrw, setChangeKrw] = useState(true)
    const [changeBtc, setChangeBtc] = useState(true)

    //분류하기
    const [sorting, setSorting] = useState([])

    //table 정렬 토글
    const [isToggled, setToggled] = useState(false);
    const [btcToggle, setBtcToggle] = useState(true)

    // 오름차순, 내림차순에 넣을 배열
    let reference = [];

    //krw이름 정렬
    const KrwNamekortoggle = () => {

        if (isToggled) {
            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)
                ))
            }

            // 오름차순
            reference.sort(function (u, b) {
                return u.nameKor < b.nameKor ? -1 : u.nameKor > b.nameKor ? 1 : 0;
            });

            setChangeKrw(false)
            setSorting(reference)

        } else {
            setChangeKrw(false)
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))
            // 내림차순
            reference.sort(function (u, b) {

                return u.nameKor > b.nameKor ? -1 : u.nameKor < b.nameKor ? 1 : 0;

            });

            setSorting(reference)
        }
        setToggled(!isToggled)
    }
    //btc이름 정렬
    const BtcNamekortoggle = () => {

        if (btcToggle) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)

                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.nameKor < b.nameKor ? -1 : u.nameKor > b.nameKor ? 1 : 0;

            });


            setChangeBtc(false);
            setSorting(reference)

        } else {

            setChangeBtc(false);
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))
            // 내림차순
            reference.sort(function (u, b) {

                return u.nameKor > b.nameKor ? -1 : u.nameKor < b.nameKor ? 1 : 0;

            });
            setSorting(reference)
        }
        setBtcToggle(!btcToggle)
    }

    //krw현재가 정렬
    const KrwClosetoggle = () => {

        if (isToggled) {
            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)
                ))
            }

            // 오름차순
            reference.sort(function (u, b) {
                return u.close < b.close ? -1 : u.close > b.close ? 1 : 0;
            });

            setChangeKrw(false)
            setSorting(reference)

        } else {
            setChangeKrw(false)
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))
            // 내림차순
            reference.sort(function (u, b) {

                return u.close > b.close ? -1 : u.close < b.close ? 1 : 0;

            });

            setSorting(reference)
        }
        setToggled(!isToggled)
    }
    //btc현재가 정렬
    const BtcClosetoggle = () => {

        if (btcToggle) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)

                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.close < b.close ? -1 : u.close > b.close ? 1 : 0;

            });


            setChangeBtc(false);
            setSorting(reference)

        } else {

            setChangeBtc(false);
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))
            // 내림차순
            reference.sort(function (u, b) {

                return u.close > b.close ? -1 : u.close < b.close ? 1 : 0;

            });
            setSorting(reference)
        }
        setBtcToggle(!btcToggle)
    }

    //krw최고가 정렬
    const KrwHightoggle = () => {

        if (isToggled) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)
                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.high < b.high ? -1 : u.high > b.high ? 1 : 0;

            });

            setChangeKrw(false)
            setSorting(reference)

        } else {
            setChangeKrw(false)

            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))
            //내림차순
            reference.sort(function (u, b) {

                return u.high > b.high ? -1 : u.high < b.high ? 1 : 0;

            });

            setSorting(reference)
        }

        setToggled(!isToggled)

    }
    //btc최고가 정렬
    const BtcHightoggle = () => {

        if (btcToggle) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)

                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.high < b.high ? -1 : u.high > b.high ? 1 : 0;

            });


            setChangeBtc(false);
            setSorting(reference)

        } else {

            setChangeBtc(false);
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)
            ))
            // 내림차순
            reference.sort(function (u, b) {

                return u.high > b.high ? -1 : u.high < b.high ? 1 : 0;

            });

            setSorting(reference)
        }

        setBtcToggle(!btcToggle)

    }

    //krw최저가 정렬
    const KrwLowtoggle = () => {

        if (isToggled) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)
                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.low < b.low ? -1 : u.low > b.low ? 1 : 0;

            });

            setChangeKrw(false)
            setSorting(reference)

        } else {
            setChangeKrw(false)

            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))
            //내림차순
            reference.sort(function (u, b) {

                return u.low > b.low ? -1 : u.low < b.low ? 1 : 0;

            });

            setSorting(reference)
        }

        setToggled(!isToggled)

    }
    //btc최저가 정렬
    const BtcLowtoggle = () => {

        if (btcToggle) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)

                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.close < b.close ? -1 : u.close > b.close ? 1 : 0;

            });


            setChangeBtc(false);
            setSorting(reference)

        } else {

            setChangeBtc(false);
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)
            ))
            // 내림차순
            reference.sort(function (u, b) {

                return u.close > b.close ? -1 : u.close < b.close ? 1 : 0;

            });

            setSorting(reference)
        }

        setBtcToggle(!btcToggle)

    }

    //krw거래대금 정렬
    const KrwVolumetoggle = () => {

        if (isToggled) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)
                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.volume < b.volume ? -1 : u.volume > b.volume ? 1 : 0;

            });

            setChangeKrw(false)
            setSorting(reference)

        } else {
            setChangeKrw(false)

            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)

            ))
            //내림차순
            reference.sort(function (u, b) {

                return u.volume > b.volume ? -1 : u.volume < b.volume ? 1 : 0;

            });

            setSorting(reference)
        }

        setToggled(!isToggled)

    }
    //btc거래대금 정렬
    const BtcVolumetoggle = () => {

        if (btcToggle) {

            {
                props.finalData && props.finalData.map(AllCon => (
                    reference.push(AllCon)

                ))
            }
            // 오름차순
            reference.sort(function (u, b) {
                return u.volume < b.volume ? -1 : u.volume > b.volume ? 1 : 0;

            });


            setChangeBtc(false);
            setSorting(reference)

        } else {

            setChangeBtc(false);
            props.finalData && props.finalData.map(AllCon => (
                reference.push(AllCon)
            ))
            // 내림차순
            reference.sort(function (u, b) {

                return u.volume > b.volume ? -1 : u.volume < b.volume ? 1 : 0;

            });

            setSorting(reference)
        }

        setBtcToggle(!btcToggle)

    }

    //krw table thead
    const KrwSortTable = () => {
        return (

            <tr className=" SortableMarketTableThead">
                <th className="SortableMarketTable__favoriteCell"></th>
                <th className="SortableMarketTable__coinNameCell hoverThead" onClick={KrwNamekortoggle}>이름</th>
                <th className="SortableMarketTable__lastPriceCell hoverThead" onClick={KrwClosetoggle}>현재가</th>
                <th className="SortableTable__align--right hoverThead" onClick={KrwHightoggle}>최고가</th>
                <th className="SortableTable__align--right hoverThead" onClick={KrwLowtoggle}>최저가</th>
                <th className="SortableMarketTable__quoteVolumeCell hoverThead" onClick={KrwVolumetoggle}>거래대금</th>
            </tr>

        )
    }
    //btc table thead
    const BtcSortTable = () => {
        return (
            <tr className=" SortableMarketTableThead">
                <th className="SortableMarketTable__favoriteCell hoverThead"></th>
                <th className="SortableMarketTable__coinNameCell hoverThead" onClick={BtcNamekortoggle}>이름</th>
                <th className="SortableMarketTable__lastPriceCell hoverThead" onClick={BtcClosetoggle}>현재가</th>
                <th className="SortableTable__align--right hoverThead" onClick={BtcHightoggle}>최고가</th>
                <th className="SortableTable__align--right hoverThead" onClick={BtcLowtoggle}>최저가</th>
                <th className="SortableMarketTable__quoteVolumeCell hoverThead" onClick={BtcVolumetoggle}>거래대금</th>
            </tr>
        )
    }

    return (

        <div>

            <h2>hihi</h2>
            <Tabs defaultActiveKey="1" className="SelectTab SelectTabFilter">

{/*<<<<<<< HEAD*/}
                {/*<TabPane tab="심" key="1"  focus={{border:'none'}}>*/}
{/*=======*/}
                <TabPane tab="관" key="1"  focus={{border:'none'}}>
{/*>>>>>>> 8b03cb7ae3efc8fe5e0e5f8109045be25b617bc7*/}
                    {changeKrw ?

                        <table className=" SortableMarketTable ">

                            <thead>
                            <KrwSortTable/>
                            </thead>

                            <tbody>

                            <KrwTable finalData={props.finalData}/>

                            </tbody>
                        </table>

                        :

                        <table className=" SortableMarketTable ">

                            <thead>
                            <KrwSortTable/>
                            </thead>

                            <tbody>

                            {isToggled ?
                                <KrwTable finalData={sorting}/>
                                :
                                <KrwTable finalData={sorting}/>
                            }

                            </tbody>
                        </table>}
                </TabPane>

                <TabPane tab="KRW" key="2">
                    {changeKrw ?

                        <table className=" SortableMarketTable ">

                            <thead>
                            <KrwSortTable/>
                            </thead>

                            <tbody>

                            <KrwTable finalData={props.finalData}/>
                            </tbody>
                        </table>

                        :

                        <table className=" SortableMarketTable ">

                            <thead>
                            <KrwSortTable/>
                            </thead>

                            <tbody>

                            {isToggled ?
                                <KrwTable finalData={sorting}/>
                                :
                                <KrwTable finalData={sorting}/>
                            }
                            </tbody>
                        </table>
                    }

                </TabPane>

                <TabPane tab="BTC" key="3">
                    {changeBtc ?

                        <table className=" SortableMarketTable ">

                            <thead>
                            <BtcSortTable/>
                            </thead>

                            <tbody>

                            <BtcTable finalData={props.finalData}/>
                            </tbody>
                        </table>

                        :

                        <table className=" SortableMarketTable ">

                            <thead>
                            <BtcSortTable/>
                            </thead>

                            <tbody>

                            {btcToggle ?
                                <BtcTable finalData={sorting}/>
                                :
                                <BtcTable finalData={sorting}/>
                            }

                            </tbody>
                        </table>
                    }
                </TabPane>
            </Tabs>

        </div>
    )
}

export default IndexPage
