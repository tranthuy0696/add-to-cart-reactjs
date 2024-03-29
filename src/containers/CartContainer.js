import React, {Component} from 'react';
import {connect} from 'react-redux'
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as Message from './../constants/Message'

class CartContainer extends Component {
  render() {
    const {cart} = this.props
    return (
      <Cart>
          {this.showCartItems(cart)}
      </Cart>
    )
  }

  showCartItems(cart) {
    let result = Message.MSG_CART_EMPTY
    result = cart.map((item, index) => {
        return <CartItem key={index} item={item} index={index}/>
      })
    return result
  }

  showTotalAmount = (cart) => {
    let result = null
    if (cart.length > 0 ) {
        result = <CartResult cart = {cart} />
    }
    return result
  }

}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps, null)(CartContainer)
