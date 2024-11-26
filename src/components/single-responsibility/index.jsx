import React from 'react'
import Page from '../../pages/single-responsibility/index1'
import ProductsPage from '../../pages/single-responsibility/index2'

const SingleResponsibility = ({isSrp}) => {
  return (
    <div className='main-div'>
        {isSrp ? <ProductsPage /> : <Page />}
    </div>
  )
}

export default SingleResponsibility