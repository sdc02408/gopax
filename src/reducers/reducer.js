import {TRADING_PAIRS, TRADING_PARIS_STATS, ASSETS} from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case TRADING_PAIRS:
      return {
        ...state,
        coins: action.data
        }
      break
    case TRADING_PARIS_STATS:
      return{
        ...state,
        coinStats : action.data
      }
      break
    case ASSETS:
      return {
        ...state,
        assets: action.data
      }
    
    default:
      return state
  }
}
