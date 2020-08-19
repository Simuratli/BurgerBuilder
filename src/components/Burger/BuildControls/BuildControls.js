import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad',type: 'salad'},
    {label:'Meat',type: 'meat'},
    {label:'Cheese',type: 'cheese'},
    {label:'Bacon',type: 'bacon'}
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Burger Price: {props.price.toFixed(2)}</p>
           {controls.map(control=>{
               return  <BuildControl 
                added ={()=> props.ingredientAdded(control.type)}
                minus = {() => props.ingredientMinus(control.type)}
                key={control.label}
                label={control.label}
                disabled={props.disabled[control.type]}
            />
           })}
           <button 
           className={classes.OrderButton}
           disabled={!props.purchasable}
           onClick={props.ordered}
           >
               ORDER NOW</button>
        </div>
    )
}


export default buildControls