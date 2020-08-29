import React, { useEffect } from 'react'
import {fetchTradingPairsStats} from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import SortTable from '../components/views/SortTable'

const TradingPairsStatsData = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchTradingPairsStats())
  }, [])
  
  const tradingPairsStatsData = useSelector(state => state.tradingPairs.coinStats);
  // console.log(tradingPairsStatsData,'요놈도 두번째 컨테이너')
  
  
  return(
    <div>
    
      {tradingPairsStatsData && tradingPairsStatsData .map(coinsStats => (
        <SortTable
          key={coinsStats.id}
          close={coinsStats.close}
          high={coinsStats.high}
          low={coinsStats.low}
        open={coinsStats.open}
          time={coinsStats.time}
          volume={coinsStats.volume}
        />
      ))}
  
    </div>
  )
}

export default TradingPairsStatsData
