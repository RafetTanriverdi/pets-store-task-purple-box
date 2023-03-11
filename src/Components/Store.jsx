import React from 'react'
import StoreItem from '../Pages/StoreItem'
import StoreSelected from '../Pages/StoreSelected'
import { StoreProvider } from '../Context/StoreContext'
import StoreFavorites from '../Pages/StoreFavorites'

function Store() {
  return (
    <div style={{width:"90%",margin:"25px auto"}}>

      <StoreProvider>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px" ,  position:"relative" ,alignItems:"center",}}>
        <StoreFavorites />  
        <StoreSelected />

        </div>
        <StoreItem />
      </StoreProvider>
  
    </div>
  )
}

export default Store