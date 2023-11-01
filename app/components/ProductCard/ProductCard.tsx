import React from 'react';
import AddToCart from "@/app/components/AddToCart";

interface Props {
    stringProp: string,
}

var productCardStyle: string =
    `p-2 m-2 ml-0 bg-sky-100 text-blue-700 font-bold text-centerdrop-shadow-lg shadow-blue-700 ' +
    ' border rounded border-blue-700 hover:bg-sky-200 w-64`;

const ProductCard = (props: Props) => {
    return (
        <div>
            <div className={productCardStyle}>
                {props.stringProp}
                <AddToCart></AddToCart>
            </div>
        </div>
    );
};

export default ProductCard;

