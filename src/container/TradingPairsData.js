import React, {useEffect} from 'react'
import {fetchTradingPairs, fetchAssets, fetchTradingPairsStats} from '../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import IndexPage from "../components/views/IndexPage";


const TradingPairsData = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTradingPairs())
        dispatch(fetchAssets())
        dispatch(fetchTradingPairsStats())
    }, [])

    const tradingPairsData = useSelector(state => state.tradingPairs.coins) || []

    const assetsData = useSelector(state => state.assets.assets) || []

    const tradingPairsStatsData = useSelector(state => state.tradingPairs.coinStats) || []

    //asset 과 tradingPairsData 병합후 newData에 삽입
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

    //newData와 tradingPairsStatsData 병합후 finalData에 삽입
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



    return (
        <div>
            <IndexPage
                finalData={finalData}
            />
        </div>
    )
}

export default TradingPairsData
