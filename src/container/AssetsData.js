import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAssets } from '../actions/actions'
import SortTable from '../components/views/SortTable'

function AssetsData () {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAssets())
  }, [])
  
  const assetsData = useSelector(state => state.assets.assets);
  // console.log(assetsData,'zzzzzzzzz')
  
  
  
  return(
    <div>
      {assetsData && assetsData.map(assetsCoins => (
        <SortTable name={assetsCoins.name} />
      ))}
    </div>
  )
}

export default AssetsData
