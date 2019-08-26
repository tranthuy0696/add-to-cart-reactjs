import React, {Component} from 'react';
import {connect} from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
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
    result = products.map((product, index) => {
        return <Product key={index} product={product}/>
      })
    return result
  }

}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, null)(ProductsContainer)
