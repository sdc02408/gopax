import {TRADING_PAIRS, TRADING_PARIS_STATS,ASSETS} from './types'

export const fetchTradingPairsData = (data) => {
  return {
    type: TRADING_PAIRS,
    data
  }
}

export const fetchTradingPairs = async () => {
  return (dispatch) => {

    return fetch('/trading-pairs')
    .then(response => response.json())
    .then(response => {
      dispatch(fetchTradingPairsData(response))
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
