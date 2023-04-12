import React from 'react'
import {NavLink} from 'react-router-dom'

function Snack(props){
let snack = props.t_o_snack
let {image} = props


    return(
        <>
        <div style={{display:'flex', 'flex-direction':'column', 'justify-content' : 'center', 'align-items':'center'}}>
            
        <h1>{snack}</h1>
        <img src={image} style={{width:'200px', height:'200px', }}/>
        <NavLink  to="/"  className={'nl'}>Back to Vending Machine</NavLink>
        
            </div></>
    )
}

export default Snack