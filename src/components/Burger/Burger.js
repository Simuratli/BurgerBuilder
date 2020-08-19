import React from 'react'
import classes from './Burger.css'
import BurgerIngridients from './BurgerIngridients/BurgerIngridients'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredient)
    .map(igKey => {return [...Array(props.ingredient[igKey])].map((_,index)=>{
        return <BurgerIngridients key={igKey+index} type={igKey} />
    })
})
.reduce((arr,el)=>{
    return arr.concat(el)
},[])

if(transformedIngredients.length === 0){
    transformedIngredients = <p>Start adding ingredient</p>
}
    return (
        <div className={classes.Burger}>
            <BurgerIngridients type='bread-top' />
            {transformedIngredients}
            <BurgerIngridients type='bread-bottom' />
        </div>
    )
}

export default burger
