import React,{Component} from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
class orderSummary extends Component  {

    ingredientSummary = Object.keys(this.props.ingredients)
    .map(key=>{
    return (
        <li key={key}>
            <span style={{textTransform:'capitalize'}}>{key}</span>:{this.props.ingredients[key]}
        </li>
    )
    })
    render(){
        return (
            <Aux>
                <h3>Your Burger</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {this.ingredientSummary}
                </ul>
                <h3>Price: {this.props.price.toFixed(2)} $</h3>
                <p>Continue to Checkout?</p>
                <Button buttonType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button  buttonType='Success' >CONTINUE</Button>
            </Aux>
        )
    }
}



export default orderSummary

