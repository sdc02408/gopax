import React, {useEffect} from 'react'
import {fetchTradingPairs, fetchAssets, fetchTradingPairsStats} from '../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import SortTable from '../components/views/SortTable'
import '../static/sass/components/SortTable.scss'
import BtcTable from "../components/views/BtcTable";
import IndexPage from "../components/views/IndexPage";

const TradingPairsData = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTradingPairs())
        dispatch(fetchAssets())
        dispatch(fetchTradingPairsStats())
    }, [])

    const tradingPairsData = useSelector(state => state.tradingPairs.coins, []) || []
    // console.log( tradingPairsData,'이거냐')
    const assetsData = useSelector(state => state.assets.assets) || []
    // console.log( assetsData,'zzzzzzzzz')
    const tradingPairsStatsData = useSelector(state => state.tradingPairs.coinStats, []) || []
    // console.log(tradingPairsStatsData,'요놈도 두번째 컨테이너')

    let newData = []
    for (let i = 0; i < tradingPairsData.length; i++) {
        for (let j = 0; j < assetsData.length; j++) {
            if ((tradingPairsData[i].baseAsset) === (assetsData[j].id)) {
                let myjson = {
                    idCommon: assetsData[j].id,
                    nameCommon: tradingPairsData[i].baseAsset,
                    nameKor: assetsData[j].name,
                    nameCommonStats: tradingPairsData[i].name,
                    quoteAsset: tradingPairsData[i].quoteAsset,
                }
                newData.push(myjson)
            }
        }
    }
    // console.log(newData, 'newdata')

    let finalData = []

    for (let x = 0; x < newData.length; x++) {
        for (let k = 0; k < tradingPairsStatsData.length; k++) {

            if ((newData[x].nameCommonStats) === (tradingPairsStatsData[k].name)) {
                let finalMyJson = {
                    idCommon: newData[x].idCommon,
                    nameCommon: newData[x].nameCommon,
                    nameKor: newData[x].nameKor,
                    nameCommonStats: newData[x].nameCommonStats,
                    quoteAsset: newData[x].quoteAsset,
                    open: tradingPairsStatsData[k].open,
                    high: tradingPairsStatsData[k].high,
                    low: tradingPairsStatsData[k].low,
                    close: tradingPairsStatsData[k].close,
                    volume: tradingPairsStatsData[k].volume,
                    time: tradingPairsStatsData[k].time,
                }
                finalData.push(finalMyJson)
            }
        }
    }

    console.log(finalData, 'finaldata')


    return (
        <div>
            <BtcTable
                finalData={finalData}
            />
            {/*{tradingPairsData && tradingPairsData.map(coins => (*/}
            {/*  <SortTable key={coins.id} baseAsset={coins.baseAsset} quoteAsset={coins.quoteAsset}/>*/}
            {/*))}*/}


            {/*{finalData && finalData.filter(name => name.quoteAsset.includes('BTC')).map(AllCoin => (*/}

            {/*filter(name => name.close > 0 ).*/}
            {/*{finalData && finalData.filter(names => names.quoteAsset.includes('BTC')).map(AllCoin => (*/}

            {/*    <SortTable*/}
            {/*        key={AllCoin.id}*/}
            {/*        idCommon={AllCoin.idCommon}*/}
            {/*        nameCommon={AllCoin.nameCommon}*/}
            {/*        nameCommonStates={AllCoin.nameCommonStats}*/}
            {/*        nameKor={AllCoin.nameKor}*/}
            {/*        open={AllCoin.open}*/}
            {/*        quoteAsset={AllCoin.quoteAsset}*/}
            {/*        high={AllCoin.high}*/}
            {/*        low={AllCoin.low}*/}
            {/*        close={AllCoin.close}*/}
            {/*        volume={AllCoin.volume}*/}
            {/*        time={AllCoin.time}*/}
            {/*    />*/}
            {/*))}*/}











            {/*{finalData && finalData.map(closeData => (*/}
            {/*    closeData.close ?*/}
            {/*        <SortTable close= {closeData.close}/> : null*/}
            {/*))}*/}

        </div>
    )
}

export default TradingPairsData
