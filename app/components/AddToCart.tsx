'use client';
import React, {Component} from 'react';

class AddToCart extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add to
                    Cart
                </button>
            </div>
        );
    }
}

export default AddToCart;