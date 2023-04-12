import React from 'react'
// import Snack from './Snack'
import {NavLink} from 'react-router-dom'



function VendingMachine(){



return(
    <>
    
    <h1> Vending Machine</h1>
    
    <img src={'https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/original/products/7309/12556/ams-39-outdoor-snack-drink-vending-machine__28519.1658495606.jpg?c=1'} style={{width:'200px', height:'200px'}} alt={''}></img>
    <nav style={{display: 'flex', 'flex-direction':'column', }}>
      {/* <NavLink  to="/"  className={'nl'}>Vending Machine</NavLink> */}
      <NavLink exact to="/chips" className={'nl'}>Chips</NavLink>
      <NavLink exact to="/soda" className={'nl'}>Soda</NavLink>
      <NavLink exact to="/candy" className={'nl'}>Candy</NavLink>
      </nav>

    </>
)
}


export default VendingMachine