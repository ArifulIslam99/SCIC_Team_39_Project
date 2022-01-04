import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProducts = (props) => {
    const { _id , productName, productPrice, productImg, productDescription } = props.product;
    return (
        <div>
           <div className="col">
                <div className="card h-100 shadow-sm p-3"> <img 
                
                 style={{width:'400px', height:'400px'}}
                src={productImg} className="card-img-top img-fluid " alt="..." />
                    <div className="card-body">
                        <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{productName}</span> <span className="float-end text-danger fw-bold price-hp">{productPrice} Tk</span> </div>
                        <h5 className="card-title"> {productDescription}</h5>

                        <div className="text-center my-4">
                          <Link to={`/purchase/${_id}`}>
                          <button className="btn btn-warning">Purchase Now</button>
                          </Link>
                          
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default DisplayProducts;