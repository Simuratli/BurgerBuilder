import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIEND_PRICES = {
    salad: 0.5,
    cheese:0.2,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilders extends Component {
   
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }

    addIgredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIEND_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition

        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIgredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIEND_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition

        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(key=>{
          return  ingredients[key]
        })
        .reduce((sum,el)=>{
            return sum + el
        },0)

        this.setState({purchasable:sum > 0})

    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    render() {

        const disabledInfo =  {
            ...this.state.ingredients
        }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux> 
                <Modal closeModal={()=>{this.setState({purchasing:false})}} show={this.state.purchasing}>
                    <OrderSummary  purchaseCancel={()=>{this.setState({purchasing:false})}} price={this.state.totalPrice} ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredient={this.state.ingredients} />
                <div>
                    <BuildControls
                    ingredientAdded = {this.addIgredient}
                    ingredientMinus = {this.removeIgredient}
                    disabled ={disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered={this.purchaseHandler}
                    /> 
                    </div>
            </Aux>
        );
    }
}

export default BurgerBuilders;
