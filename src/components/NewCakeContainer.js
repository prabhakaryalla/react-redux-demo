import React, {useState} from 'react'
import { buyCake } from '../redux';
import {connect } from 'react-redux';

function NewCakeContainer(props) {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <div>
                <input type="number" onChange={(e) => setCount(e.target.value)} value={count} />
                <button onClick={() => props.buyCake(count)}>Buy {count} Cake</button>
            </div>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes:  state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: count => dispatch(buyCake(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);