import React, { Component } from 'react';

class Grocery extends Component {
    constructor(){
        super()
        this.state={
            item: '',
            brand: '',
            units: '',
            quantity: '0',
            isPurchased: false,
        }
    }
    render() {
        return (
            <div>
                Item:{this.state.item}
                <br/>
                Brand:{this.state.brand}
                <br/>
                Units:{this.state.units}
                <br/>
                Quantity: {this.state.quantity}
                <br/>
                Purchased: {this.state.isPurchased}
            </div>
        );
    }
}

export default Grocery;