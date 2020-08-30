import React from 'react';
import '../App.css';
import IndexPage from './views/IndexPage'
import TradingPairsData from '../container/TradingPairsData'
import TradingPairsStatsData from '../container/TradingPairsStatsData'
import AssetsData from '../container/AssetsData'
import SortTable from '../components/views/SortTable'

function App() {
  return (
    <div className="App">
      {/*<IndexPage />*/}
      <TradingPairsData />
      {/*<TradingPairsStatsData />*/}
      {/*<AssetsData />*/}
    </div>
  );
}

export default App;
