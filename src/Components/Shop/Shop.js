import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayProducts from './DisplayProducts/DisplayProducts';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-garden-17818.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className='container'>
                <h2 className='text-info fw-bold py-3 my-4' id='offers' ><span className='text-warning fw-bold'> All </span>Products</h2>

                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <DisplayProducts product={product}></DisplayProducts>)
                    }


                </Row>
            </div>
        </div>
    );
};

export default Shop;