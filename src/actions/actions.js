import {TRADING_PAIRS, TRADING_PARIS_STATS,ASSETS} from './types'

export const fetchTradingPairsData = (data) => {
  return {
    type: TRADING_PAIRS,
    data
  }
}

export const fetchTradingPairs = () => {
  return (dispatch) => {

    return fetch('/trading-pairs')
    .then(response => response.json())
    .then(response => {
      dispatch(fetchTradingPairsData(response))
      // console.log(fetchTradingPairsData(response),"setcoiㅇㅇㅇㅇㅇns")
    })

    .catch(error => {
      throw(error);
    })
  }
}


export const fetchTradingPairsStatsData = (data) => {
  return {
    type: TRADING_PARIS_STATS,
    data
  }
}

export const fetchTradingPairsStats = () => {
  return (dispatch) => {

    return fetch('/trading-pairs/stats')
    .then(response => response.json())
    .then(response => {
      dispatch(fetchTradingPairsStatsData(response))
      // console.log(response,"두번재ㅑ 데티어")
    })

    .catch(error => {
      throw(error)
    })
  }
}

export const fetchAssetsData = (data) => {
  return {
    type: ASSETS,
    data
  }
}

export const fetchAssets = () => {
  return (dispatch) => {

    return fetch('/assets')
    .then(response => response.json())
    .then(response => {
      dispatch(fetchAssetsData(response))
    })

    .catch(error => {
      throw(error)
    })
  }

}
