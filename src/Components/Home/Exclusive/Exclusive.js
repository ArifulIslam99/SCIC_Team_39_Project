import React from 'react';
import img1 from '../../../images/exclusive/ex1.jpg';
import img2 from '../../../images/exclusive/ex2.jpg';
import img3 from '../../../images/exclusive/ex3.jpg';
import img4 from '../../../images/exclusive/ex4.jpg';
import './Exclusive.css'


const Exclusive = () => {
  return (
    <div className="container  collection">
      <h2>Exclusive Collection</h2>
      <div className="row">


        <div className="col-md-3">
          <div className="product-top">
            <img src={img1} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i class="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i class="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i class="fas fa-shopping-cart"></i></button>
            </div>

{/* <div className="product-bottom text-center">
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star-half-alt" ></i>
<i class="far fa-star"></i>
</div> */}

{/* <h5>write something about product</h5> */}


          </div>
        </div>


        <div className="col-md-3">
          <div className="product-top">
            <img src={img2} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i class="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i class="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i class="fas fa-shopping-cart"></i></button>
            </div>

{/* <div className="product-bottom text-center">
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star-half-alt" ></i>
<i class="far fa-star"></i>
</div> */}
          </div>
        </div>



        <div className="col-md-3">
          <div className="product-top">
            <img src={img3} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i class="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i class="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i class="fas fa-shopping-cart"></i></button>
            </div>

{/* <div className="product-bottom text-center">
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star-half-alt" ></i>
<i class="far fa-star"></i>
</div> */}
          </div>
        </div>



        <div className="col-md-3">
          <div className="product-top">
            <img src={img4} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i class="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i class="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i class="fas fa-shopping-cart"></i></button>
            </div>

{/* <div className="product-bottom text-center">
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star" ></i>
<i class="fas fa-star-half-alt" ></i>
<i class="far fa-star"></i>
</div> */}
          </div>
        </div>





      </div>
    </div>
  );
};

export default Exclusive;