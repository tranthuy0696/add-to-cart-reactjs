import React, {Component} from 'react';
import {connect} from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import {addToCart, actChangeMessage} from './../actions/index'

class ProductsContainer extends Component {
  render() {
    const {products} = this.props
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    )
  }

  showProducts(products) {
    let result = null
    let {onAddToCart, onChangeMessage} = this.props
    result = products.map((product, index) => {
        return <Product key={index} product={product} onAddToCart = {onAddToCart} onChangeMessage = {onChangeMessage}/>
      })
    return result
  }

}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(addToCart(product, 1))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
