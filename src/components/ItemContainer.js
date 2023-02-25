import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  return (
    <div>
        <h2>Number of Items: {props.numOfItems}</h2>
        <button onClick={() => props.buyItem()}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const items = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    return {
        numOfItems: items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyItem: () => ownProps.cake ? dispatch(buyCake()) : dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);