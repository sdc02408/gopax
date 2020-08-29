import {combineReducers} from 'redux'
import tradingPairsReducer from './reducer'
import tradingPairsStatsReducer from './reducer'
import assetsReducer from './reducer'

const rootReducer = combineReducers({
  tradingPairs : tradingPairsReducer,
  tradingPairsStats : tradingPairsStatsReducer,
  assets: assetsReducer
  
})

export default rootReducer;
