import React from 'react'

const StockBadge = ({stock}) => {
  if(stock <=3){
    return <span className='badge badge-danger'>Critical</span>
  }
  else if(stock<=6){
    return <span className='badge badge-warning'>Low</span>
  }
  else{
    return <span className='badge badge-safe'>Safe</span>
  }
}

export default StockBadge
